/**
 * MFA (TOTP + passkeys) for Mifos X Web App
 *
 * status: current
 * audience: developers, installer-admin
 * related: docs/getting-started/first-login.md, docs/SECURITY_REVIEW.md
 */

# Multi-factor authentication (TOTP & passkeys)

The app supports three second-factor / alternate login methods:

| Method | When it appears | Backend |
| --- | --- | --- |
| Fineract SMS / email OTP | Fineract `twofactor` is enabled for the user | Fineract `/twofactor` |
| TOTP authenticator | User enrolled under **Profile → Security** | App MFA layer (`environment.mfa`) |
| Passkey (WebAuthn) | User enrolled a passkey; also offered on the login form | App MFA layer |

## Configuration

```ts
// environment.ts / environment.prod.ts
mfa: {
  demoMode: true,          // local IndexedDB vault (dev/e2e)
  rpId: '',                // empty → window.location.hostname
  rpName: 'Mifos X',
  apiPath: '/mfa'          // HTTP sidecar when demoMode is false
}
```

- **`demoMode: true`** (default in development): TOTP secrets and passkey credential IDs live in the browser vault `mifosXMfaVault`. Passwordless passkey login restores the session captured when the passkey was registered. Suitable for local demos and Playwright; **not** for production.
- **`demoMode: false`**: the SPA calls the MFA HTTP API under `apiPath`. That service must store secrets server-side and, when Fineract platform 2FA is also required, return `{ token, validTo }` compatible with `POST /twofactor/validate`.

## User flows

1. **Enroll TOTP** — Sign in → Profile → Security → Set up authenticator → scan QR / enter secret → confirm with a live code.
2. **Login with TOTP** — Password succeeds → MFA challenge → enter 6-digit code.
3. **Enroll passkey** — Profile → Security → Register passkey (browser ceremony).
4. **MFA with passkey** — After password, choose Passkey on the challenge screen.
5. **Passwordless passkey** — Login form → Sign in with passkey (demo restores enrollment session; production expects `/mfa/passkey/login`).

## HTTP contract (production sidecar)

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/mfa/status?username=` | Enrollment status |
| POST | `/mfa/totp/setup` | Begin TOTP enrollment |
| POST | `/mfa/totp/confirm` | Confirm TOTP with code |
| DELETE | `/mfa/totp` | Disable TOTP |
| POST | `/mfa/webauthn/register/options` | Creation options |
| POST | `/mfa/webauthn/register` | Store new credential |
| DELETE | `/mfa/webauthn/credentials/:id` | Remove passkey |
| POST | `/mfa/webauthn/assert/options` | Assertion options |
| POST | `/mfa/challenge/totp` | Validate TOTP during login |
| POST | `/mfa/challenge/webauthn` | Validate assertion during login |
| POST | `/mfa/passkey/login` | Passwordless; returns Fineract credentials |

Challenge endpoints should return the same shape as Fineract `POST /twofactor/validate` when a platform TFA token is required:

```json
{ "token": "...", "validTo": 1710000000000, "tokenLiveTimeInSec": 3600 }
```

## Code map

- `src/app/core/mfa/` — models, vault, TOTP/WebAuthn helpers, `MfaService`
- `AuthenticationService` — gates login on MFA after first factor; `validateTotpChallenge` / `validatePasskeyChallenge` / `loginWithPasskey`
- Login `TwoFactorAuthenticationComponent` — method chooser (TOTP / passkey / SMS-email)
- `SecuritySettingsComponent` on Profile — enrollment UI

Apache Fineract does not ship TOTP or WebAuthn; keep the Fineract OTP path for SMS/email and use the MFA layer (or a Fineract plugin) for authenticator apps and passkeys.
