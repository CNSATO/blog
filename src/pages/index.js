import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h2" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Main Page`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={clsx(styles.MainPageContent)}>
          Thanks for your visit. However, this site is still under construction.
          <br />
          A range of technical record and study not will be upload to the site for sharing my experience with you.
          <br />
          <a herf="xnsato@cnsato.cn">Contact: cnsato@cnsato.cn</a>
        </div>

      </main>
    </Layout>
  );
}
