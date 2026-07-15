import { describe, expect, it } from 'vitest';

import { isWebAuthnAvailable, toBase64Url, fromBase64Url, randomChallenge } from './webauthn.util';

describe('webauthn.util', () => {
  it('round-trips base64url buffers', () => {
    const original = randomChallenge(16);
    const encoded = toBase64Url(original.buffer);
    const decoded = new Uint8Array(fromBase64Url(encoded));
    expect(Array.from(decoded)).toEqual(Array.from(original));
  });

  it('reports WebAuthn availability based on browser APIs', () => {
    expect(typeof isWebAuthnAvailable()).toBe('boolean');
  });
});
