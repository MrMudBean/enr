import { _en } from 'enr';
import type { TabListItem } from '@/theme/Sidebar/types';

export const id = 'headers-theme';

export const headersItems: TabListItem = {
  label: '标题们',
  url: '#'.concat(id),
};

/**  标题们的展示  */
export function HeadersMode() {
  return (
    <div className={_en('style')}>
      <h1>标题一</h1>
      <h2>标题二</h2>
      <h3>标题三</h3>
      <h4>标题四</h4>
      <h5>标题五</h5>
      <h6>标题六</h6>
    </div>
  );
}
