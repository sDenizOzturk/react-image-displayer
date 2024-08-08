import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'React Image Displayer',
  tagline: 'Effortless Image Loader: Fast, Stylish, Secure',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://sDenizOzturk.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-image-displayer',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sDenizOzturk', // Usually your GitHub org/user name.
  projectName: 'react-image-displayer', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sDenizOzturk/react-image-displayer/tree/main/react-image-displayer-docs/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: 'React Image Displayer',

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'DocumentationSidebar',
          position: 'left',
          label: 'Documentation',
        },

        {
          href: 'https://github.com/sDenizOzturk/react-image-displayer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-image-displayer',
            },
          ],
        },
        {
          title: 'More',
          items: [ {
              label: 'GitHub',
              href: 'https://github.com/sDenizOzturk/react-image-displayer',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Image Displayer. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
