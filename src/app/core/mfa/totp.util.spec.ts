import { describe, expect, it } from 'vitest';

import { createTotpSetup, verifyTotpCode } from './totp.util';

describe('totp.util', () => {
  it('creates a setup secret and verifies a matching code', () => {
    const setup = createTotpSetup('mifos');
    expect(setup.secret.length).toBeGreaterThan(10);
    expect(setup.otpauthUri).toContain('otpauth://totp/');
    expect(setup.otpauthUri).toContain('Mifos%20X');

    const code = setup.totp.generate();
    expect(verifyTotpCode(setup.secret, code)).toBe(true);
    expect(verifyTotpCode(setup.secret, '000000')).toBe(false);
  });
});
