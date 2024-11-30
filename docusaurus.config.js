// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'amiable.dev',
  tagline: 'observable engineering',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://amiable.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'amiable-dev', // Usually your GitHub org/user name.
  projectName: 'amiable-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          editUrl: 'https://github.com/amiable-dev/amiable-docusaurus/edit/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} amiable.dev`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems} = params;
              const items = await defaultCreateFeedItems(params);
              items.forEach((item, index) => {
                const post = blogPosts[index];
                // Add AI attribution to RSS feed
                if (post.metadata.ai_generated) {
                  item.description = `[AI-Generated Content] ${item.description}`;
                }
              });
              return items;
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  markdown: {
    mermaid: true,
  },
  
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ... rest of your existing theme config
    }),
};

export default config;