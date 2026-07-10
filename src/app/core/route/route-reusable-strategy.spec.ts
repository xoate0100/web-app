import { describe, expect, it } from 'vitest';

import { RouteReusableStrategy } from './route-reusable-strategy';

describe('RouteReusableStrategy', () => {
  const strategy = new RouteReusableStrategy();

  it('reuses routes only when route configs match', () => {
    const loginRoute = { path: 'login', data: {} } as const;
    const shellRoute = { path: '', data: { reuse: true } } as const;

    expect(strategy.shouldReuseRoute(
      { routeConfig: shellRoute } as never,
      { routeConfig: loginRoute } as never,
    )).toBe(false);

    expect(strategy.shouldReuseRoute(
      { routeConfig: shellRoute } as never,
      { routeConfig: shellRoute } as never,
    )).toBe(true);
  });
});
