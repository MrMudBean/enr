'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 *  styled  的 className 收集
 * @param root0
 * @param root0.children
 */
export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  );
}
