---
title: Corporate Proxy Setup
audience: admin
status: current
role: guide
personas: [installer-admin, developers]
last_reviewed: 2026-07-15
---

# Corporate proxy

**Who this is for:** [installers](./personas/installer-admin.md) and [developers](./personas/developers.md) on networks that require an HTTP(S) proxy.

Set environment variables before `npm ci` / git:

```bash
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
export NO_PROXY=localhost,127.0.0.1
```

npm also honors:

```bash
npm config set proxy http://proxy.example.com:8080
npm config set https-proxy http://proxy.example.com:8080
```

Git:

```bash
git config --global http.proxy http://proxy.example.com:8080
```

Then continue with [Local development](./getting-started/local-development.md) or [Installation](./getting-started/installation.md).
