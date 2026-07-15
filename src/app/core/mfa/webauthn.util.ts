/**
 * WebAuthn / passkey helpers (browser APIs).
 */

function bufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let str = '';
  bytes.forEach((b) => { str += String.fromCharCode(b); });
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlToBuffer(base64url: string): ArrayBuffer {
  const pad = '='.repeat((4 - (base64url.length % 4)) % 4);
  const base64 = (base64url + pad).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const buffer = new ArrayBuffer(raw.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < raw.length; i++) {
    view[i] = raw.charCodeAt(i);
  }
  return buffer;
}

export function randomChallenge(byteLength = 32): Uint8Array {
  const challenge = new Uint8Array(byteLength);
  crypto.getRandomValues(challenge);
  return challenge;
}

export function toBase64Url(buffer: ArrayBuffer): string {
  return bufferToBase64Url(buffer);
}

export function fromBase64Url(value: string): ArrayBuffer {
  return base64UrlToBuffer(value);
}

export function isWebAuthnAvailable(): boolean {
  return typeof window !== 'undefined'
    && !!window.PublicKeyCredential
    && typeof navigator.credentials?.create === 'function'
    && typeof navigator.credentials?.get === 'function';
}

/**
 * Registers a new platform/roaming passkey.
 */
export async function createPasskey(options: {
  rpId: string;
  rpName: string;
  userId: string;
  userName: string;
  userDisplayName: string;
}): Promise<PublicKeyCredential> {
  const userIdBytes = new TextEncoder().encode(options.userId);
  const credential = await navigator.credentials.create({
    publicKey: {
      challenge: randomChallenge(),
      rp: { id: options.rpId, name: options.rpName },
      user: {
        id: userIdBytes,
        name: options.userName,
        displayName: options.userDisplayName,
      },
      pubKeyCredParams: [
        { type: 'public-key', alg: -7 },
        { type: 'public-key', alg: -257 },
      ],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        userVerification: 'preferred',
        residentKey: 'preferred',
        requireResidentKey: false,
      },
      timeout: 60_000,
      attestation: 'none',
    },
  });
  if (!credential || credential.type !== 'public-key') {
    throw new Error('Passkey registration was cancelled or failed.');
  }
  return credential as PublicKeyCredential;
}

/**
 * Asserts an existing passkey (login / MFA).
 */
export async function assertPasskey(options: {
  rpId: string;
  allowCredentialIds?: string[];
}): Promise<PublicKeyCredential> {
  const allowCredentials = (options.allowCredentialIds ?? []).map((id) => ({
    type: 'public-key' as const,
    id: fromBase64Url(id),
  }));

  const credential = await navigator.credentials.get({
    publicKey: {
      challenge: randomChallenge(),
      rpId: options.rpId,
      allowCredentials: allowCredentials.length ? allowCredentials : undefined,
      userVerification: 'preferred',
      timeout: 60_000,
    },
  });
  if (!credential || credential.type !== 'public-key') {
    throw new Error('Passkey authentication was cancelled or failed.');
  }
  return credential as PublicKeyCredential;
}
