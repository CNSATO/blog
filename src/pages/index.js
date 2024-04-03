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
          “我在荒岛上迎接黎明。太阳初升时，忽然有十万支金喇叭齐鸣。阳光穿过透明的空气，在喑蓝色的天空飞过。在黑暗尚未褪去的海面上燃烧着十万支蜡烛。我听见天地之间钟声响了，然后十万支金喇叭又一次齐鸣。”
          <br />
          by 王小波
          <br />
          <br />
          Thanks for your visit. However, this site is still under construction.
          <br />
          A range of technical records and study notes will be uploaded here for sharing my experience with you.
          <br />
          <a href="mailto:cnsato@cnsato.cn">Contact: cnsato@cnsato.cn</a>
        </div>
      </main>
    </Layout>
  );
}
