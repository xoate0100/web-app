/**
 * Global mocks and stubs for the Vitest test environment.
 */
(globalThis as typeof globalThis & { particlesJS?: { load: () => void } }).particlesJS = {
  load: () => undefined,
};
