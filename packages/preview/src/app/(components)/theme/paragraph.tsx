import { _en } from 'enr';
import type { TabListItem } from '@/theme/Sidebar/types';

const id = 'paragraph-theme';

export const paragraphItem: TabListItem = {
  label: '段落',
  url: '#'.concat(id),
};

/**  使用段落展示正文的样式  */
export function ParagraphMode() {
  return (
    <div id={id} className={_en('flex-column', 'style')}>
      <h1>咏鹅</h1>
      <div className={_en('flex-column', 'text-center')}>
        <p>鹅，鹅，鹅</p>
        <p>天天伸个脖</p>
        <p>叫得比谁都响</p>
        <p>拉的比谁都多</p>
      </div>
    </div>
  );
}
