/**
 * Multi-factor authentication models (TOTP + passkeys + legacy SMS/email OTP).
 */

export type MfaMethodType = 'sms' | 'email' | 'totp' | 'passkey';

export interface MfaPasskeyCredential {
  id: string;
  name: string;
  createdAt: string;
  lastUsedAt?: string;
}

export interface MfaStatus {
  totpEnabled: boolean;
  passkeys: MfaPasskeyCredential[];
  /** Enabled app-level MFA method keys. */
  methods: Array<'totp' | 'passkey'>;
}

export interface TotpSetupResponse {
  secret: string;
  otpauthUri: string;
  /** Base64 PNG data URL when available */
  qrDataUrl?: string;
}

export interface MfaTokenResponse {
  token: string;
  validTo: number;
  tokenLiveTimeInSec?: number;
}

export interface PasskeyLoginResult {
  credentials: import('../authentication/credentials.model').Credentials;
  twoFactorToken?: MfaTokenResponse;
}

export interface MfaConfig {
  /** When true, TOTP secrets and passkeys are stored in a browser vault (local/demo). */
  demoMode: boolean;
  /** WebAuthn relying party ID (hostname). Empty uses `window.location.hostname`. */
  rpId: string;
  /** Relying party display name. */
  rpName: string;
  /** Optional HTTP base path for an MFA sidecar (used when demoMode is false). */
  apiPath: string;
}
