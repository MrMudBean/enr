'use client';

import { useColorMode } from 'enr';
import type { HTMLAttributes } from 'react';

/**
 *  主题色值模式切换
 * @param props
 */
export function ColorModeToggle(props: HTMLAttributes<HTMLDivElement>) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div onClick={toggleColorMode} {...props}>
      {colorMode === 'light' ? '🌞' : '🌙'}
    </div>
  );
}
