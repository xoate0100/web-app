import { describe, expect, it } from 'vitest';

import { maskConfigSecret } from './mask-config-secret';

describe('maskConfigSecret', () => {
  it('masks secret-like configuration names', () => {
    expect(maskConfigSecret('s3_secret_key', 'abcd')).toBe('••••••••');
    expect(maskConfigSecret('password', 'secret')).toBe('••••••••');
    expect(maskConfigSecret('server_key', 'gcm')).toBe('••••••••');
  });

  it('leaves non-secret values visible', () => {
    expect(maskConfigSecret('host', 'smtp.example.com')).toBe('smtp.example.com');
    expect(maskConfigSecret('port', '587')).toBe('587');
  });
});
