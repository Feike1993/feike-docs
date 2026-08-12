import type {CSSProperties, ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {projects} from '@site/src/data/profile';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

export default function Projects(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          代表项目
        </Heading>
        <p className={styles.sectionLead}>从 0 到 1 的高并发平台与企业级数字化建设</p>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={styles.projectItem}
              style={{'--delay': `${index * 100}ms`} as CSSProperties}>
              <div className={styles.projectMeta}>
                <Heading as="h3" className={styles.projectName}>
                  {project.name}
                </Heading>
                <div className={styles.projectRole}>
                  <span>{project.role}</span>
                  <span className={styles.projectDot} aria-hidden="true">
                    ·
                  </span>
                  <span>{project.period}</span>
                </div>
              </div>
              <ul className={styles.projectHighlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
