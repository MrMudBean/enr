import { Image } from 'enr';
import { xcn } from 'xcn';
import styles from './index.module.scss';

/**  图像测试  */
export default function ImagePage() {
  return (
    <div>
      <div>
        <Image src="/image/defaultBackground.png" className={xcn(styles.img)} />
      </div>
    </div>
  );
}
