import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import QRCode from 'qrcode';

import { environment } from '../../../environments/environment';
import { Credentials } from '../authentication/credentials.model';
import {
  MfaPasskeyCredential,
  MfaStatus,
  MfaTokenResponse,
  PasskeyLoginResult,
  TotpSetupResponse
} from './mfa.models';
import {
  vaultAddPasskey,
  vaultConfirmTotp,
  vaultDisableTotp,
  vaultFindByCredentialId,
  vaultGetAccount,
  vaultGetStatus,
  vaultRemovePasskey,
  vaultSaveTotpSecret,
  vaultTouchPasskey,
  vaultUpdateSessionHandoff
} from './mfa-vault';
import { createTotpSetup, verifyTotpCode } from './totp.util';
import {
  assertPasskey,
  createPasskey,
  isWebAuthnAvailable,
  toBase64Url
} from './webauthn.util';

function tenantId(): string {
  return environment.fineractPlatformTenantId || 'default';
}

function mfaConfig() {
  return environment.mfa;
}

function resolveRpId(): string {
  const configured = mfaConfig().rpId;
  if (configured) {
    return configured;
  }
  return typeof window !== 'undefined' ? window.location.hostname : 'localhost';
}

function demoToken(validSeconds = 3600): MfaTokenResponse {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const validTo = Date.now() + validSeconds * 1000;
  return {
    token: `demo-mfa-${toBase64Url(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength))}`,
    validTo,
    tokenLiveTimeInSec: validSeconds
  };
}

/**
 * Application MFA (TOTP authenticator apps + WebAuthn passkeys).
 *
 * When `environment.mfa.demoMode` is true, enrollment and verification run
 * entirely in the browser vault. When false, requests go to the MFA HTTP
 * sidecar under `environment.mfa.apiPath`.
 */
@Injectable()
export class MfaService {

  constructor(private http: HttpClient) {}

  isDemoMode(): boolean {
    return !!mfaConfig().demoMode;
  }

  webAuthnAvailable(): boolean {
    return isWebAuthnAvailable();
  }

  getStatus(username: string): Observable<MfaStatus> {
    if (this.isDemoMode()) {
      return from(vaultGetStatus(username, tenantId()));
    }
    return this.http.get<MfaStatus>(`${mfaConfig().apiPath}/status`, {
      params: { username }
    });
  }

  requiresChallenge(username: string): Observable<boolean> {
    return this.getStatus(username).pipe(
      map((status) => status.methods.length > 0),
      catchError(() => of(false))
    );
  }

  beginTotpSetup(username: string): Observable<TotpSetupResponse> {
    if (this.isDemoMode()) {
      return from(this.beginTotpSetupDemo(username));
    }
    return this.http.post<TotpSetupResponse>(`${mfaConfig().apiPath}/totp/setup`, { username });
  }

  confirmTotpSetup(username: string, code: string): Observable<void> {
    if (this.isDemoMode()) {
      return from(this.confirmTotpSetupDemo(username, code));
    }
    return this.http.post<void>(`${mfaConfig().apiPath}/totp/confirm`, { username, code });
  }

  disableTotp(username: string): Observable<void> {
    if (this.isDemoMode()) {
      return from(vaultDisableTotp(username, tenantId()));
    }
    return this.http.request<void>('DELETE', `${mfaConfig().apiPath}/totp`, { body: { username } });
  }

  registerPasskey(
    username: string,
    displayName: string,
    sessionCredentials?: Credentials
  ): Observable<MfaPasskeyCredential> {
    if (this.isDemoMode()) {
      return from(this.registerPasskeyDemo(username, displayName, sessionCredentials));
    }
    return this.http.post<any>(`${mfaConfig().apiPath}/webauthn/register/options`, { username }).pipe(
      switchMap((options) =>
        from((async () => {
          const credential = await navigator.credentials.create({ publicKey: options.publicKey });
          if (!credential || credential.type !== 'public-key') {
            throw new Error('Passkey registration was cancelled or failed.');
          }
          return credential;
        })())
      ),
      switchMap((credential) =>
        this.http.post<MfaPasskeyCredential>(`${mfaConfig().apiPath}/webauthn/register`, {
          username,
          name: displayName,
          credential
        })
      )
    );
  }

  removePasskey(username: string, credentialId: string): Observable<void> {
    if (this.isDemoMode()) {
      return from(vaultRemovePasskey(username, tenantId(), credentialId));
    }
    return this.http.request<void>(
      'DELETE',
      `${mfaConfig().apiPath}/webauthn/credentials/${encodeURIComponent(credentialId)}`,
      { body: { username } }
    );
  }

  validateTotpChallenge(username: string, code: string, issuePlatformToken: boolean): Observable<MfaTokenResponse | null> {
    if (this.isDemoMode()) {
      return from(this.validateTotpDemo(username, code, issuePlatformToken));
    }
    return this.http.post<MfaTokenResponse>(`${mfaConfig().apiPath}/challenge/totp`, {
      username,
      code
    });
  }

  validatePasskeyChallenge(username: string, issuePlatformToken: boolean): Observable<MfaTokenResponse | null> {
    if (this.isDemoMode()) {
      return from(this.validatePasskeyDemo(username, issuePlatformToken));
    }
    return this.http.post<any>(`${mfaConfig().apiPath}/webauthn/assert/options`, { username }).pipe(
      switchMap(async (options) => {
        const assertion = await navigator.credentials.get({ publicKey: options.publicKey });
        if (!assertion || assertion.type !== 'public-key') {
          throw new Error('Passkey authentication was cancelled or failed.');
        }
        return assertion;
      }),
      switchMap((assertion) =>
        this.http.post<MfaTokenResponse>(`${mfaConfig().apiPath}/challenge/webauthn`, {
          username,
          assertion
        })
      )
    );
  }

  /**
   * Passwordless passkey login. Demo mode restores the session handoff captured
   * at enrollment; production expects the MFA server to return Fineract credentials.
   */
  loginWithPasskey(): Observable<PasskeyLoginResult> {
    if (this.isDemoMode()) {
      return from(this.loginWithPasskeyDemo());
    }
    return this.http.post<any>(`${mfaConfig().apiPath}/webauthn/assert/options`, { discoverable: true }).pipe(
      switchMap(async (options) => {
        const assertion = await navigator.credentials.get({ publicKey: options.publicKey });
        if (!assertion || assertion.type !== 'public-key') {
          throw new Error('Passkey authentication was cancelled or failed.');
        }
        return assertion;
      }),
      switchMap((assertion) =>
        this.http.post<PasskeyLoginResult>(`${mfaConfig().apiPath}/passkey/login`, { assertion })
      )
    );
  }

  private async beginTotpSetupDemo(username: string): Promise<TotpSetupResponse> {
    const setup = createTotpSetup(username);
    await vaultSaveTotpSecret(username, tenantId(), setup.secret);
    let qrDataUrl: string | undefined;
    try {
      qrDataUrl = await QRCode.toDataURL(setup.otpauthUri, { margin: 1, width: 220 });
    } catch {
      qrDataUrl = undefined;
    }
    return {
      secret: setup.secret,
      otpauthUri: setup.otpauthUri,
      qrDataUrl
    };
  }

  private async confirmTotpSetupDemo(username: string, code: string): Promise<void> {
    const account = await vaultGetAccount(username, tenantId());
    if (!account.totpSecret) {
      throw new Error('No pending TOTP enrollment for this account.');
    }
    if (!verifyTotpCode(account.totpSecret, code)) {
      throw new Error('Invalid authenticator code. Try again.');
    }
    await vaultConfirmTotp(username, tenantId());
  }

  private async validateTotpDemo(
    username: string,
    code: string,
    issuePlatformToken: boolean
  ): Promise<MfaTokenResponse | null> {
    const account = await vaultGetAccount(username, tenantId());
    if (!account.totpEnabled || !account.totpSecret) {
      throw new Error('Authenticator app is not enabled for this account.');
    }
    if (!verifyTotpCode(account.totpSecret, code)) {
      throw new Error('Invalid authenticator code.');
    }
    return issuePlatformToken ? demoToken() : null;
  }

  private async registerPasskeyDemo(
    username: string,
    displayName: string,
    sessionCredentials?: Credentials
  ): Promise<MfaPasskeyCredential> {
    if (!isWebAuthnAvailable()) {
      throw new Error('Passkeys are not supported in this browser.');
    }
    const credential = await createPasskey({
      rpId: resolveRpId(),
      rpName: mfaConfig().rpName,
      userId: `${tenantId()}:${username}`,
      userName: username,
      userDisplayName: displayName || username
    });
    const response = credential.response as AuthenticatorAttestationResponse;
    const summary: MfaPasskeyCredential = {
      id: toBase64Url(credential.rawId),
      name: displayName || 'Passkey',
      createdAt: new Date().toISOString()
    };
    await vaultAddPasskey(
      username,
      tenantId(),
      summary,
      response.getPublicKey?.() ?? new ArrayBuffer(0),
      sessionCredentials
    );
    return summary;
  }

  private async validatePasskeyDemo(
    username: string,
    issuePlatformToken: boolean
  ): Promise<MfaTokenResponse | null> {
    if (!isWebAuthnAvailable()) {
      throw new Error('Passkeys are not supported in this browser.');
    }
    const status = await vaultGetStatus(username, tenantId());
    if (!status.passkeys.length) {
      throw new Error('No passkeys enrolled for this account.');
    }
    const assertion = await assertPasskey({
      rpId: resolveRpId(),
      allowCredentialIds: status.passkeys.map((p) => p.id)
    });
    const credentialId = toBase64Url(assertion.rawId);
    if (!status.passkeys.some((p) => p.id === credentialId)) {
      throw new Error('Unrecognized passkey.');
    }
    await vaultTouchPasskey(username, tenantId(), credentialId);
    return issuePlatformToken ? demoToken() : null;
  }

  private async loginWithPasskeyDemo(): Promise<PasskeyLoginResult> {
    if (!isWebAuthnAvailable()) {
      throw new Error('Passkeys are not supported in this browser.');
    }
    const assertion = await assertPasskey({ rpId: resolveRpId() });
    const credentialId = toBase64Url(assertion.rawId);
    const row = await vaultFindByCredentialId(credentialId);
    if (!row?.sessionHandoff?.credentials) {
      throw new Error(
        'No demo session is linked to this passkey. Sign in with password once, then register the passkey under Profile → Security.'
      );
    }
    await vaultTouchPasskey(row.username, row.tenantId, credentialId);
    // Refresh handoff so subsequent passwordless logins stay current in demo.
    await vaultUpdateSessionHandoff(row.username, row.tenantId, row.sessionHandoff.credentials);
    return {
      credentials: {
        ...row.sessionHandoff.credentials,
        isTwoFactorAuthenticationRequired: false,
        shouldRenewPassword: false
      }
    };
  }
}
