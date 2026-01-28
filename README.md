# 根

## 超前类

在使用 babel 时候，出现了

```bash
Additionally, handling the error in the 'buildEnd' hook caused the following error:
  [plugin rpt2] src/customHooks/useRipples/buildBackground/default-background/circleDataList.ts:81:9 - error TS2354: This syntax requires an imported helper but module 'tslib' cannot be found.

81     if (this.#cum > 100) this.#cum = 0;
```

是由于 babel 配置不完善造成的。

但是更改 babel 配置后并没有解决，所以使用 typescript 自带的 `private` 代替实现

## rollup 处理图像文件

使用 `@rollup/plugin-url` 或 `rollup-plugin-image` 等插件：

- `@rollup/plugin-url` 供了更多的自定义选项，适合更加精细化控制的情况

  ```js
  import url from '@rollup/plugin-url';
  import { defineConfig } from 'rollup';

  export default defineConfig({
    //
    plugins: [
      url({
        limit: 8 * 1024,
        include: ['**/*.png'],
        emitFiles: true,
        fileName: '[name][hash].[ext]',
      }),
    ],
    //
  });
  ```

- `rollup-plugin-image` 简单直接，适合快速集成

  ```js
  import image from 'rollup-plugin-image';

  export default {
    //
    plugins: [image()],
    //
  };
  ```

## 代办

完善 `hhf` 并使用该包作为开发热更新的辅助工具，一处设定开发环境。并在特定的文件更改后，在各引用包中更新依赖，避免手动维持的复杂性和易故障性！！！
