/**
 * Unit tests for resolveBaseApiUrl (SEC-03).
 */
import { afterEach, describe, expect, it } from 'vitest';

import { resolveBaseApiUrl } from './resolve-base-api-url';

describe('resolveBaseApiUrl', () => {
  afterEach(() => {
    localStorage.removeItem('mifosXServerURL');
  });

  it('always returns the default URL in production', () => {
    localStorage.setItem('mifosXServerURL', JSON.stringify('https://evil.example'));
    expect(resolveBaseApiUrl('https://bank.example', { production: true, allowServerSwitch: true }))
      .toBe('https://bank.example');
  });

  it('ignores localStorage when server switch is disabled', () => {
    localStorage.setItem('mifosXServerURL', JSON.stringify('https://evil.example'));
    expect(resolveBaseApiUrl('https://bank.example', { production: false, allowServerSwitch: false }))
      .toBe('https://bank.example');
  });

  it('allows https override in development when server switch is enabled', () => {
    localStorage.setItem('mifosXServerURL', JSON.stringify('https://staging.example'));
    expect(resolveBaseApiUrl('https://bank.example', { production: false, allowServerSwitch: true }))
      .toBe('https://staging.example');
  });

  it('rejects non-https overrides', () => {
    localStorage.setItem('mifosXServerURL', JSON.stringify('http://insecure.example'));
    expect(resolveBaseApiUrl('https://bank.example', { production: false, allowServerSwitch: true }))
      .toBe('https://bank.example');
  });
});
