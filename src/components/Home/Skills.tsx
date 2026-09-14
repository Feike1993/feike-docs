import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {skillGroups} from '@site/src/data/profile';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

export default function Skills(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, styles.altSection, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          技能栈
        </Heading>
        <p className={styles.sectionLead}>从 Java 后端到制造业务、数据处理与系统集成</p>
        <div className={styles.skillGroups}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>{group.category}</h3>
              <div className={styles.skillTags}>
                {group.items.map((item) => (
                  <span key={item} className={styles.skillTag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
