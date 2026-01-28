import { _en } from 'enr';
import { ColorModeToggle } from '@/theme/ColorModeToggle';
import { ThemeModeTitle } from './Title';

/**  头部数据  */
export function ThemeModeLayoutHeader() {
  return (
    <div className={_en('flex', 'full-container')}>
      <ThemeModeTitle />
      <ColorModeToggle
        className={_en('padding-horizontal-24')}
        style={{
          lineHeight: 'var(--layout-header-height)',
        }}
      />
    </div>
  );
}
