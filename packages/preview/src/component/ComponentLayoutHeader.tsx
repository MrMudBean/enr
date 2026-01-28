import { _en } from 'enr';
import Link from 'next/link';

/**  组件布局的头部  */
export function ComponentLayoutHeader() {
  return (
    <div className={_en('center')}>
      <Link href={'https://lmssee.com'} target="_blank">
        earthnut react ui
      </Link>
      <span> 部分组件功能展示</span>
    </div>
  );
}
