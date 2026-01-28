import type { TabList } from '@/theme/Sidebar/types';
import { headersItems } from './Headers';
import { inputsItems } from './Input';
import { paragraphItem } from './paragraph';
import { radioItem } from './Radio';
import { toggleThemeColorModeItem } from './ToggleThemeMode';

export const tabList: TabList = [
  toggleThemeColorModeItem,
  headersItems,
  paragraphItem,
  inputsItems,
  radioItem,
];
