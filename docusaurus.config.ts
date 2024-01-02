import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "PATH.JERRYIO",
  tagline: "The best path editor in VRC for designing skills routes and generating path files",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://path.jerryio.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jerrylum", // Usually your GitHub org/user name.
  projectName: "docs.path.jerryio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/readme-banner-0.5x.png",
    navbar: {
      title: "PATH.JERRYIO",
      logo: {
        alt: "PATH.JERRYIO Logo",
        src: "img/logo512.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Jerrylum/path.jerryio",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Discord Community",
          items: [
            {
              label: "PATH.JERRYIO",
              href: "https://discord.gg/4uVSVXXBBa"
            },
            {
              label: "LemLib",
              href: "https://discord.gg/pCHr7XZUTj"
            },
            {
              label: "VTOW",
              href: "https://discord.gg/vrc"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/Jerrylum/path.jerryio"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The PATH.JERRYIO Contributors. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
