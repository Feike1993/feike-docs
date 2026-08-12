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
          <span className={styles.projectLabel}>项目背景</span>
          <p className={styles.projectText}>{project.background}</p>
        </div>

        <div className={styles.projectField}>
          <span className={styles.projectLabel}>核心职责</span>
          <p className={styles.projectText}>{project.responsibility}</p>
        </div>

        <div className={styles.projectField}>
          <span className={styles.projectLabel}>关键工作</span>
          <ul className={styles.projectWorks}>
            {project.works.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.projectField}>
          <span className={styles.projectLabel}>项目成果</span>
          <p className={styles.projectText}>{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}

export default function Projects(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, visible && styles.revealed)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          项目经历
        </Heading>
        <p className={styles.sectionLead}>企业级平台从 0 到 1 与持续迭代</p>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <ProjectBlock key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
