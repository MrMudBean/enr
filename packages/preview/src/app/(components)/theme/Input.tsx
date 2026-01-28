import { _en } from 'enr';
import { useState } from 'react';
import { styled } from 'styled-components';
import type { TabListItem } from '@/theme/Sidebar/types';

const InputContainer = styled.div`
  & > div {
    margin: var(--en-font-size-base);
  }
`;

const id = 'input-theme';

export const inputsItems: TabListItem = {
  label: '输入框',
  url: '#'.concat(id),
};

/**  输入框  */
export function InputMemoTheme() {
  const [text1, setText1] = useState('输入信息');
  const [text2, setText2] = useState('输入信息');

  return (
    <InputContainer id={id} className={_en('style')}>
      <div>
        普通输入框：
        <input type="text" className={_en('input-type-text-primary')} placeholder="占位文本" />
      </div>
      <div>
        普通输入框：
        <input
          type="text"
          className={_en('input-type-text-primary')}
          value={text1}
          onChange={e => setText1(e.target.value)}
          placeholder="请输入"
        />
      </div>
      <div>
        反转输入框：
        <input type="text" className={_en('input-type-text-revers')} placeholder="占位文本" />
      </div>
      <div>
        反转输入框：
        <input
          type="text"
          title="你好"
          className={_en('input-type-text-revers')}
          value={text2}
          onChange={e => setText2(e.target.value)}
        />
      </div>
    </InputContainer>
  );
}
