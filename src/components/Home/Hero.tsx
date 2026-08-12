import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {profile} from '@site/src/data/profile';
import styles from './styles.module.css';

export default function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          {profile.brand}
        </Heading>
        <p className={styles.heroRole}>{profile.title}</p>
        <p className={styles.heroTagline}>{profile.tagline}</p>
        <div className={styles.heroActions}>
          <a className={clsx('button button--lg', styles.ctaPrimary)} href="#contact">
            联系我
          </a>
          <Link
            className={clsx('button button--lg button--outline', styles.ctaSecondary)}
            to="/docs/intro">
            阅读文档
          </Link>
        </div>
      </div>
    </header>
  );
}
