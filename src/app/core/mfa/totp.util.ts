import { TOTP, Secret } from 'otpauth';

/** Issuer shown in authenticator apps. */
export const TOTP_ISSUER = 'Mifos X';

/**
 * Creates a new TOTP secret and otpauth URI for enrollment.
 */
export function createTotpSetup(username: string): { secret: string; otpauthUri: string; totp: TOTP } {
  const secret = new Secret({ size: 20 });
  const totp = new TOTP({
    issuer: TOTP_ISSUER,
    label: username,
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret,
  });
  return {
    secret: secret.base32,
    otpauthUri: totp.toString(),
    totp,
  };
}

/**
 * Validates a TOTP code against a base32 secret.
 */
export function verifyTotpCode(secretBase32: string, code: string, window = 1): boolean {
  const totp = new TOTP({
    issuer: TOTP_ISSUER,
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: Secret.fromBase32(secretBase32),
  });
  const delta = totp.validate({ token: code.replace(/\s/g, ''), window });
  return delta !== null;
}
