'use client';

import type { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { TabItem } from './SidebarItem/Link';
import type { TabList } from './types';

const NarContent = styled.div`
  grid-area: tab;
  overflow: auto;
  background-color: #000;
  border-radius: 12px;
  min-height: 100%;
`;

/**
 * 左侧导航栏
 * @param root0
 * @param root0.data
 */
export default function MainTab({
  data,
  ...props
}: { data: TabList } & HTMLAttributes<HTMLDivElement>) {
  return (
    <NarContent {...props}>
      <nav>
        <ul>
          {data?.map(e => (
            <TabItem data={e} key={e.label} />
          ))}
        </ul>
      </nav>
    </NarContent>
  );
}
