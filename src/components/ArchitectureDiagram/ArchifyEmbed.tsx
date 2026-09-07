import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

type ArchifyEmbedProps = {
  /** 相对 static 的路径，如 /diagrams/ai-example/rag-pipeline.html */
  src: string;
  title?: string;
  height?: number;
  className?: string;
};

/**
 * 嵌入 Archify 自包含 HTML 产物（iframe）。产物放在 static/，不引入 React 依赖。
 */
export default function ArchifyEmbed({
  src,
  title = 'Archify 架构图',
  height = 720,
  className,
}: ArchifyEmbedProps): ReactNode {
  const resolved = useBaseUrl(src);

  return (
    <div className={clsx(styles.archifyWrap, className)}>
      <iframe
        className={styles.archifyFrame}
        src={resolved}
        title={title}
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
