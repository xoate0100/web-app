/**
 * Masks configuration values that look like secrets for display (SEC-08).
 */
export function maskConfigSecret(name: string | undefined, value: string | undefined): string {
  if (value == null || value === '') {
    return '';
  }
  if (name && /password|secret|token|access[_-]?key|api[_-]?key|server[_-]?key|tenant_app_key|(^|[_-])key$/i.test(name)) {
    return '••••••••';
  }
  return value;
}
