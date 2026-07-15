/**
 * Browser-local MFA vault used by demoMode for TOTP secrets, passkey
 * credentials, and passwordless session handoff. Production builds with
 * demoMode=false never read this vault — secrets live on the MFA server.
 */

import { Credentials } from '../authentication/credentials.model';
import { MfaPasskeyCredential, MfaStatus } from './mfa.models';

const DB_NAME = 'mifosXMfaVault';
const DB_VERSION = 1;
const STORE = 'accounts';

export interface MfaVaultAccount {
  username: string;
  tenantId: string;
  totpSecret?: string;
  totpEnabled: boolean;
  passkeys: MfaPasskeyCredential[];
  /** Raw credential publicKey buffers keyed by credentialId (demo only). */
  passkeyPublicKeys: Record<string, ArrayBuffer>;
  /**
   * Credentials captured when a passkey was enrolled (demo passwordless only).
   * Not used when MFA is backed by a real server.
   */
  sessionHandoff?: {
    credentials: Credentials;
    savedAt: string;
  };
}

function accountKey(username: string, tenantId: string): string {
  return `${tenantId || 'default'}::${username.toLowerCase()}`;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not available in this environment.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'key' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Failed to open MFA vault'));
  });
}

interface StoredRow extends MfaVaultAccount {
  key: string;
}

async function getRow(username: string, tenantId: string): Promise<StoredRow | undefined> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).get(accountKey(username, tenantId));
    req.onsuccess = () => resolve(req.result as StoredRow | undefined);
    req.onerror = () => reject(req.error ?? new Error('MFA vault read failed'));
  });
}

async function putRow(row: StoredRow): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(row);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('MFA vault write failed'));
  });
}

function emptyAccount(username: string, tenantId: string): StoredRow {
  return {
    key: accountKey(username, tenantId),
    username,
    tenantId,
    totpEnabled: false,
    passkeys: [],
    passkeyPublicKeys: {}
  };
}

export async function vaultGetStatus(username: string, tenantId: string): Promise<MfaStatus> {
  const row = await getRow(username, tenantId);
  return {
    totpEnabled: !!row?.totpEnabled,
    passkeys: row?.passkeys ?? [],
    methods: [
      ...(row?.totpEnabled ? (['totp'] as const) : []),
      ...((row?.passkeys.length ?? 0) > 0 ? (['passkey'] as const) : [])
    ]
  };
}

export async function vaultGetAccount(username: string, tenantId: string): Promise<MfaVaultAccount> {
  return (await getRow(username, tenantId)) ?? emptyAccount(username, tenantId);
}

export async function vaultSaveTotpSecret(
  username: string,
  tenantId: string,
  secret: string
): Promise<void> {
  const row = (await getRow(username, tenantId)) ?? emptyAccount(username, tenantId);
  row.totpSecret = secret;
  row.totpEnabled = false;
  await putRow(row);
}

export async function vaultConfirmTotp(username: string, tenantId: string): Promise<void> {
  const row = await getRow(username, tenantId);
  if (!row?.totpSecret) {
    throw new Error('No pending TOTP enrollment for this account.');
  }
  row.totpEnabled = true;
  await putRow(row);
}

export async function vaultDisableTotp(username: string, tenantId: string): Promise<void> {
  const row = (await getRow(username, tenantId)) ?? emptyAccount(username, tenantId);
  delete row.totpSecret;
  row.totpEnabled = false;
  await putRow(row);
}

export async function vaultAddPasskey(
  username: string,
  tenantId: string,
  credential: MfaPasskeyCredential,
  publicKey: ArrayBuffer,
  sessionHandoff?: Credentials
): Promise<void> {
  const row = (await getRow(username, tenantId)) ?? emptyAccount(username, tenantId);
  row.passkeys = [...row.passkeys.filter((p) => p.id !== credential.id), credential];
  row.passkeyPublicKeys = { ...row.passkeyPublicKeys, [credential.id]: publicKey };
  if (sessionHandoff) {
    row.sessionHandoff = {
      credentials: sessionHandoff,
      savedAt: new Date().toISOString()
    };
  }
  await putRow(row);
}

export async function vaultRemovePasskey(
  username: string,
  tenantId: string,
  credentialId: string
): Promise<void> {
  const row = (await getRow(username, tenantId)) ?? emptyAccount(username, tenantId);
  row.passkeys = row.passkeys.filter((p) => p.id !== credentialId);
  const next = { ...row.passkeyPublicKeys };
  delete next[credentialId];
  row.passkeyPublicKeys = next;
  if (row.passkeys.length === 0) {
    delete row.sessionHandoff;
  }
  await putRow(row);
}

export async function vaultTouchPasskey(
  username: string,
  tenantId: string,
  credentialId: string
): Promise<void> {
  const row = await getRow(username, tenantId);
  if (!row) {
    return;
  }
  row.passkeys = row.passkeys.map((p) =>
    p.id === credentialId ? { ...p, lastUsedAt: new Date().toISOString() } : p
  );
  await putRow(row);
}

export async function vaultFindByCredentialId(
  credentialId: string
): Promise<StoredRow | undefined> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => {
      const rows = (req.result as StoredRow[]) ?? [];
      resolve(rows.find((r) => r.passkeys.some((p) => p.id === credentialId)));
    };
    req.onerror = () => reject(req.error ?? new Error('MFA vault scan failed'));
  });
}

export async function vaultUpdateSessionHandoff(
  username: string,
  tenantId: string,
  credentials: Credentials
): Promise<void> {
  const row = (await getRow(username, tenantId)) ?? emptyAccount(username, tenantId);
  row.sessionHandoff = {
    credentials,
    savedAt: new Date().toISOString()
  };
  await putRow(row);
}
