'use client';

import { _en, Layout, LayoutContent, LayoutHeader, LayoutSideBar, useColorMode } from 'enr';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { xcn } from 'xcn';
import MainTab from '@/theme/Sidebar';
import { ThemeModeLayoutHeader } from './Header';
import { tabList } from './tab-data';

/**
 *
 * @param root0
 * @param root0.children
 */
export default function ThemeModeLayout({ children }: { children: ReactNode }) {
  const { colorModeClassName } = useColorMode();

  useEffect(() => {
    const title = document.title;
    document.title = '主题';

    return () => ((document.title = title), void 0);
  }, []);

  return (
    <Layout
      width={'calc(100vw - 150px - 24px)'}
      height={'calc(100vh - 4.8rem - 24px)'}
      className={xcn(
        colorModeClassName,
        _en('radius-24', 'box-shadow-light-red-80', 'margin-12'),
      )}
    >
      <LayoutHeader
        style={{
          backgroundColor: 'var(--en-color-darkness-20)',
        }}
      >
        <ThemeModeLayoutHeader />
      </LayoutHeader>
      <LayoutSideBar right full>
        <MainTab
          data={tabList}
          style={{ backgroundColor: 'var(--en-color-darkness-70)' }}
        ></MainTab>
      </LayoutSideBar>
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
}
