import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export type DiagramTool = 'mermaid' | 'archify';

type DiagramFrameProps = {
  title: string;
  tool: DiagramTool;
  description?: string;
  children: ReactNode;
  className?: string;
};

const TOOL_LABEL: Record<DiagramTool, string> = {
  mermaid: 'Mermaid',
  archify: 'Archify',
};

/**
 * 架构图外框：工具标签 + 标题说明，统一 Mermaid / Archify 样例观感。
 */
export default function DiagramFrame({
  title,
  tool,
  description,
  children,
  className,
}: DiagramFrameProps): ReactNode {
  return (
    <figure className={clsx(styles.frame, className)}>
      <figcaption className={styles.caption}>
        <div className={styles.captionMain}>
          <span className={styles.toolBadge} data-tool={tool}>
            {TOOL_LABEL[tool]}
          </span>
          <span className={styles.title}>{title}</span>
        </div>
        {description ? <p className={styles.description}>{description}</p> : null}
      </figcaption>
      <div className={styles.canvas}>{children}</div>
    </figure>
  );
}
