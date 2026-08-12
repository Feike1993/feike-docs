import type {ReactNode} from 'react';
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

export default function Home(): ReactNode {
  return (
    <Layout
      title={`${profile.brand} · ${profile.title}`}
      description={`${profile.brand} — ${profile.tagline}`}>
      <Hero />
      <main>
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
