/**
 * @packageDocumentation
 * @module @zza/index
 * @file index.ts
 * @description 共用组件
 * @author MrMudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ MrMudBean
 * @since 2026-01-20 12:43
 * @version 0.0.0
 * @lastModified 2026-01-20 16:41
 */
export { manageCookie } from './cookie';
export type { ColorMode } from './storage-store';
export {
  delStorage,
  delSessionStorage,
  setSessionStorage,
  setStorage,
  getSessionStorage,
  getStorage,
  getStorageAndDel,
  clearStorage,
  storageMainLogic,
} from './storage';

export { storageStore } from './storage-store';

export { sysInfo } from './sys';
