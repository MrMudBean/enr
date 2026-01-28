'use client';

import { useInputIsComposing } from 'enr';
import { useEffect, useRef } from 'react';
import { dog } from 'zza/log';

/**  使用输入框是否输入完成页面  */
export default function UssInputIsComposingPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const isOver = useInputIsComposing(inputRef);

  /**
   * 更改测试
   * @param e
   */
  function change(e: React.KeyboardEvent<HTMLInputElement>) {
    dog(e);
  }

  useEffect(() => {
    return () => {};
  }, [isOver]);

  return (
    <div>
      <div>
        <form>
          <div className="text-3xl text-teal-300 w-full bg-slate-500 rounded-xl shadow-sm shadow-teal-900  md:w-32 lg:w-48 p-4">
            <input
              type="text"
              placeholder="请输入"
              ref={inputRef}
              className="p-4"
              onKeyDown={change}
            />
          </div>
          <div className="p-4">
            <input type="text" required className="p-2" placeholder="请输入" />
          </div>
          <button>1246</button>
        </form>
      </div>
    </div>
  );
}
