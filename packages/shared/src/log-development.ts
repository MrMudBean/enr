/**
 * @packageDocumentation
 * @module @zza/log-development
 * @file log-development.ts
 * @description dog 开发用，当然这里将导出 dog 的类型以供打包更新版本校验
 * @author MrMudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ MrMudBean
 * @since 2026-01-21 19:52
 * @version 0.0.0
 * @lastModified 2026-01-28 05:03
 */

import { Dog } from '@qqi/log';

const dog = new Dog({
  name: 'zza',
  type: true,
  fold: true,
});

/**
 * ## 当 dun 为 `true` 时禁止打包为生产环境
 */
const dun = true;

export { dog, dun };
