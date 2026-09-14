import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {openSourcePractice} from '@site/src/data/profile';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

export default function OpenSource(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, styles.openSourceSection, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {openSourcePractice.title}
        </Heading>
        <div className={styles.openSourceIdentity}>
          <span className={styles.openSourceName}>{openSourcePractice.name}</span>
          <span className={styles.openSourceBadge}>{openSourcePractice.label}</span>
        </div>
        <p className={styles.openSourceLead}>{openSourcePractice.description}</p>
        <div className={styles.capabilityGrid}>
          {openSourcePractice.capabilities.map((capability) => (
            <article key={capability.title} className={styles.capabilityCard}>
              <Heading as="h3" className={styles.capabilityTitle}>
                {capability.title}
              </Heading>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.openSourceActions}>
          <Link className="button button--primary" to={openSourcePractice.sourceUrl}>
            查看源码
          </Link>
          <Link className="button button--outline button--primary" to={openSourcePractice.docsPath}>
            阅读工程文档
          </Link>
        </div>
      </div>
    </section>
  );
}
