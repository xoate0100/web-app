/**
 * Resolves the Fineract API base URL.
 * Production builds never honour a localStorage override (SEC-03).
 */
export function resolveBaseApiUrl(
  defaultUrl: string,
  options: { production: boolean; allowServerSwitch?: boolean }
): string {
  if (options.production || !options.allowServerSwitch) {
    return defaultUrl;
  }

  try {
    const stored = JSON.parse(localStorage.getItem('mifosXServerURL') ?? 'null');
    if (typeof stored === 'string' && /^https:\/\//i.test(stored)) {
      return stored;
    }
  } catch {
    // ignore malformed storage
  }

  return defaultUrl;
}
