// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stone Zhong',
  tagline: 'A Heart Wrenching Joke & A Long Daydream',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cnsato.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HKPolyU', // Usually your GitHub org/user name.
  projectName: 'LSGI', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CNSATO/blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CNSATO/blog/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docusaurus Guide',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'hoi4Sidebar',
          //   position: 'left',
          //   label: 'HOI Modding Guide',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'mcserverSidebar',
          //   position: 'left',
          //   label: 'Minecraft Server Guide',
          // },
          {
            to: '/blog', 
            label: 'Tech Blog | 技术杂物', 
            position: 'left'
          },
          {
            to: '/blog', 
            label: 'Daily Blog | 生活随想', 
            position: 'left'
          },
          {
            to: '/blog', 
            label: 'Politics Blog | 独立思考', 
            position: 'left'
          },
          {
            href: 'https://github.com/cnsato',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick | 快速链接',
            items: [
              {
                label: 'CV | 简历',
                href: 'https://www.google.com/',
                //to: '/docs/not_CV_time',
              },
              {
                label: 'About Me | 关于我',
                //href: 'https://www.google.com/',
                to: '/about',
              },
            ],
          },
          {
            title: 'Social | 社交媒体',
            items: [
              {
                label: 'Bilibili@犬塚石头',
                href: 'https://space.bilibili.com/53162906',
              },
            ],
          },
          {
            title: 'Links | 友情链接',
            items: [
              {
                label: 'Yuyang Liu | 刘宇阳',
                href: 'https://manacher.github.io/',
              },
              {
                label: '*',
                href: 'https://www.google.com/',
              },
            ],
          },
        ],
        copyright: `
        This work is licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a>
        <br>
        Copyright © ${new Date().getFullYear()} Stone Zhong. Built with you, Docusaurus & Vercel.`
        ,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
