import { _en, EnLayout, EnLayoutContent, EnLayoutFooter, EnLayoutHeader, LayoutSideBar } from 'enr';
import type { ReactNode } from 'react';
import MainTab from '../../theme/Sidebar';
import { styles_tab_bar_list } from './tab-list';

/**
 * 样式类的结构
 * @param root0
 * @param root0.children
 */
export default function StylesLayout({ children }: { children: ReactNode }) {
  return (
    <EnLayout width={'100vw'} height={'100vh'}>
      <EnLayoutHeader>
        <div className={_en('center')}>我是头部</div>
      </EnLayoutHeader>
      <LayoutSideBar>
        <MainTab data={styles_tab_bar_list} />
      </LayoutSideBar>
      <EnLayoutContent>{children}</EnLayoutContent>
      <EnLayoutFooter>
        <div className={_en('center')}>我是页脚</div>
      </EnLayoutFooter>
    </EnLayout>
  );
}
