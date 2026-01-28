/**
 * @packageDocumentation
 * @module @zza/storage
 * @file storage.ts
 * @description 本地存储
 * @author MrMudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ MrMudBean
 * @since 2026-01-20 12:25
 * @version 0.0.0
 * @lastModified 2026-01-20 12:40
 */
'use client';


/**
 *
 * @param key
 * @param value
 */
function set(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}
/**
 *
 * @param key
 */
function get<T>(key: string): T {
  const value: string | null = localStorage.getItem(key);
  try {
    return (value != null && JSON.parse(value)) || '';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return (value || '') as T;
  }
}
/**
 *
 * @param key
 */
function getAndDel<T = boolean>(key: string): T {
  const value = get<T>(key);
  del(key);
  return value;
}
/**
 *
 * @param key
 */
function del(key: string): void {
  return localStorage.removeItem(key);
}
/**
 *
 */
function clear(): void {
  localStorage.clear();
}
/**
 *
 * @param key
 * @param value
 */
function setSession(key: string, value: unknown): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 *
 * @param key
 */
function getSession<T>(key: string): T {
  const value: string | null = sessionStorage.getItem(key);
  return (value != null && JSON.parse(value)) || '';
}
/**
 *
 * @param key
 */
function delSession(key: string): void {
  return sessionStorage.removeItem(key);
}

export {
  del as delStorage,
  set as setStorage,
  get as getStorage,
  getAndDel as getStorageAndDel,
  clear as clearStorage,
  setSession as setSessionStorage,
  getSession as getSessionStorage,
  delSession as delSessionStorage,
};

export const storageMainLogic = {
  del,
  set,
  get,
  getAndDel,
  clear,
  setSession,
  getSession,
  delSession,
};
