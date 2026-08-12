import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {
  Hero,
  Stats,
  Strengths,
  Skills,
  Projects,
  Experience,
  Contact,
} from '@site/src/components/Home';
import {profile} from '@site/src/data/profile';
import styles from '@site/src/components/Home/styles.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title={`${profile.brand} · ${profile.title}`}
      description={`${profile.brand} — ${profile.tagline}`}>
      <Hero />
      <main className={styles.homeMain}>
        <Stats />
        <Strengths />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </Layout>
  );
}
