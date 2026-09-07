import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type LogicPairProps = {
  leftTitle: string;
  left: ReactNode;
  rightTitle: string;
  right: ReactNode;
  className?: string;
};

/**
 * 原理页双栏：桌面并排展示「问题|目的」「优点|缺点」，窄屏单列，压缩右侧空白。
 */
export default function LogicPair({
  leftTitle,
  left,
  rightTitle,
  right,
  className,
}: LogicPairProps): ReactNode {
  return (
    <div className={clsx(styles.logicPair, className)}>
      <section className={styles.logicCell}>
        <h2 className={styles.logicTitle}>{leftTitle}</h2>
        <div className={styles.logicBody}>{left}</div>
      </section>
      <section className={styles.logicCell}>
        <h2 className={styles.logicTitle}>{rightTitle}</h2>
        <div className={styles.logicBody}>{right}</div>
      </section>
    </div>
  );
}
