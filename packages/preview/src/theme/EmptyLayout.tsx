import type { ReactNode } from 'react';

/**
 *  空的 layout 占位
 * @param root0 参数对象
 * @param root0.children 子组件参数
 */
export function EmptyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
