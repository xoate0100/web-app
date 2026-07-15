---
title: SPA Routing and Server Rewrites
audience: admin
status: current
role: guide
personas: [installer-admin, developers]
last_reviewed: 2026-07-15
---

# Routing

**Who this is for:** [installers/admins](./personas/installer-admin.md) hosting the SPA, and [developers](./personas/developers.md).

The app uses Angular’s HTML5 `PathLocationStrategy` (clean URLs without `#`). The browser requests paths like `/clients/123`; the server must return `index.html` for those routes so Angular can bootstrap and take over.

## Development

`ng serve` handles rewrites automatically.

## Production

Configure your reverse proxy / static host:

### nginx

```nginx
location /web-app/ {
  try_files $uri $uri/ /web-app/index.html;
}
```

Adjust for your `base-href` (production build defaults to `/web-app/`).

### Apache

```apache
FallbackResource /web-app/index.html
```

Or an equivalent `RewriteRule` to `index.html`.

## Related

- [Installation](./getting-started/installation.md)
- [Angular Router](https://angular.dev/guide/routing)
