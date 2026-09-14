import type {CSSProperties, ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {projects, type ProjectItem} from '@site/src/data/profile';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

function ProjectBlock({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}): ReactNode {
  return (
    <article
      className={styles.projectItem}
      style={{'--delay': `${index * 100}ms`} as CSSProperties}>
      <header className={styles.projectHeader}>
        <Heading as="h3" className={styles.projectName}>
          {project.name}
        </Heading>
        <div className={styles.projectMeta}>
          <span>{project.role}</span>
          <span className={styles.projectDot} aria-hidden="true">
            ·
          </span>
          <span>{project.period}</span>
        </div>
      </header>

      <div className={styles.projectBody}>
        <div className={styles.projectField}>
          <span className={styles.projectLabel}>业务与职责</span>
          <p className={styles.projectText}>{project.background}</p>
        </div>

        <div className={styles.projectField}>
          <span className={styles.projectLabel}>关键贡献</span>
          <ul className={styles.projectWorks}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={clsx(styles.projectField, styles.projectOutcome)}>
          <span className={styles.projectLabel}>交付结果</span>
          <p className={styles.projectText}>{project.outcome}</p>
        </div>
        <details className={styles.projectDetails}>
          <summary>
            查看技术细节
            <span className={styles.srOnly}>：{project.name}</span>
          </summary>
          <ul className={styles.projectWorks}>
            {project.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  );
}

export default function Projects(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={clsx(styles.section, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          代表项目
        </Heading>
        <p className={styles.sectionLead}>研发协同 · 质量闭环 · 多工厂智能生产</p>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <ProjectBlock key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
