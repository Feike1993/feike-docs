import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {experiences} from '@site/src/data/profile';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

export default function Experience(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, styles.altSection, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          工作经历
        </Heading>
        <p className={styles.sectionLead}>十年 Java 开发，从寄递大数据到新能源制造数字化</p>
        <ol className={styles.timeline}>
          {experiences.map((item) => (
            <li key={item.company} className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true" />
              <div className={styles.timelineBody}>
                <div className={styles.timelinePeriod}>{item.period}</div>
                <Heading as="h3" className={styles.timelineCompany}>
                  {item.company}
                </Heading>
                <div className={styles.timelineRole}>{item.role}</div>
                <p className={styles.timelineSummary}>{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
