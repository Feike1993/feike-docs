import type {CSSProperties, ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {strengths} from '@site/src/data/profile';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

export default function Strengths(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          个人优势
        </Heading>
        <p className={styles.sectionLead}>制造业务 · 工业数据 · 复杂系统交付</p>
        <ol className={styles.strengthList}>
          {strengths.map((text, index) => (
            <li
              key={text}
              className={styles.strengthItem}
              style={{'--delay': `${index * 80}ms`} as CSSProperties}>
              <span className={styles.strengthIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
