import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export type SourceMapItem = {
  node: string;
  path: string;
  note?: string;
};

type SourceMapProps = {
  items: SourceMapItem[];
  title?: string;
  className?: string;
};

/**
 * 图节点 → 源码路径对照表，突出架构图与代码落点的对应关系。
 */
export default function SourceMap({
  items,
  title = '源码落点',
  className,
}: SourceMapProps): ReactNode {
  return (
    <section className={clsx(styles.sourceMap, className)} aria-label={title}>
      <h3 className={styles.sourceMapTitle}>{title}</h3>
      <ul className={styles.sourceMapList}>
        {items.map((item) => (
          <li key={`${item.node}-${item.path}`} className={styles.sourceMapItem}>
            <div className={styles.sourceMapNode}>{item.node}</div>
            <code className={styles.sourceMapPath}>{item.path}</code>
            {item.note ? <p className={styles.sourceMapNote}>{item.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
