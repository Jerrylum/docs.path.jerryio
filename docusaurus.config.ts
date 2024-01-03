import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "PATH.JERRYIO",
  tagline: "The best path editor in VRC for designing skills routes and generating path files",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.path.jerryio.com",
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
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Jerrylum/docs.path.jerryio/tree/main/"
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Project's social card
    image: "img/readme-banner-0.5x.png",
    colorMode: {
      defaultMode: "dark"
    },
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
          label: "Docs"
        },
        {
          href: "https://path.jerryio.com",
          label: "Editor",
          position: "right"
        },
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
              label: "Getting Started",
              to: "/docs/getting-started"
            },
            {
              label: "Concepts",
              to: "/docs/user-guides/concepts"
            },
            {
              label: "User Interface",
              to: "/docs/user-guides/user-interface"
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
