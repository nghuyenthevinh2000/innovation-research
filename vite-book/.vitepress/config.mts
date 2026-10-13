import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { generateSidebar } from 'vitepress-sidebar'

const readmePattern = '**/[Rr][Ee][Aa][Dd][Mm][Ee].[Mm][Dd]'

const sidebarConfigs = [
  {
    documentRootPath: 'vite-book',
    scanStartPath: 'stages',
    resolvePath: '/stages/',
    rootGroupText: 'Lifecycle Stages',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: [
      'index.md',
      'stage-1-discovery-and-seeds.md',
      'stage-2-technology-market-fit.md',
      'stage-3-business-architecture.md',
      'stage-4-market-assessment-and-mvp.md',
      'stage-5-venture-derisking-and-capital.md',
      'stage-6-spinoffs-and-scaling.md'
    ]
  },
  {
    documentRootPath: 'vite-book',
    scanStartPath: 'guides',
    resolvePath: '/guides/',
    rootGroupText: 'How-To Playbooks',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: 'vite-book',
    scanStartPath: 'glossaries',
    resolvePath: '/glossaries/',
    rootGroupText: 'Semantic Registry',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md', 'master-glossary.md']
  },
  {
    documentRootPath: 'vite-book',
    scanStartPath: 'mental-models',
    resolvePath: '/mental-models/',
    rootGroupText: 'Cognitive Architecture',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: 'vite-book',
    scanStartPath: 'structures',
    resolvePath: '/structures/',
    rootGroupText: 'Innovation Structures',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: 'vite-book',
    scanStartPath: 'analysis',
    resolvePath: '/analysis/',
    rootGroupText: 'Analysis',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: [
      'index.md',
      'ky-nang-moi-cap-nhat-da-loi-thoi.md',
      'nasruddin-bang-qua-cho.md'
    ]
  }
]

export default withMermaid(
  defineConfig({
    title: "Innovation Research",
    description: "Lab-to-Market Documentation Hub & Operational Engine (Source: HarvardX LBTechX1: Technology Entrepreneurship: Lab to Market)",
    base: process.env.BASE_URL || (process.env.GITHUB_ACTIONS ? '/innovation-research/' : '/'),
    ignoreDeadLinks: true,
    srcExclude: ['templates/**', readmePattern],
    vite: {
      resolve: {
        alias: [
          { find: 'dayjs/plugin/duration.js', replacement: 'dayjs/esm/plugin/duration' },
          { find: 'dayjs/plugin/duration', replacement: 'dayjs/esm/plugin/duration' }
        ]
      },
      optimizeDeps: {
        include: ['fastdom', 'fastdom/extensions/fastdom-promised.js', 'dayjs/esm/plugin/duration']
      }
    },
    mermaid: {
      securityLevel: 'loose',
      gantt: {
        useMaxWidth: false,
        useWidth: 610,
        fontSize: 16,
        sectionFontSize: 16,
        leftPadding: 280,
        rightPadding: 40,
        topPadding: 60,
        titleTopMargin: 40,
        barHeight: 36,
        barGap: 10
      }
    },
    markdown: {
      math: true
    },
    themeConfig: {
      siteTitle: "Innovation Hub",
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Stages', link: '/stages/' },
        { text: 'Guides', link: '/guides/how-to-deconstruct-technology-seeds' },
        { text: 'Glossaries', link: '/glossaries/' },
        { text: 'Mental Models', link: '/mental-models/' },
        { text: 'Structures', link: '/structures/' },
        { text: 'Analysis', link: '/analysis/' }
      ],
      sidebar: generateSidebar(sidebarConfigs.map(config => ({
        ...config,
        excludeByGlobPattern: [readmePattern]
      }))),
      socialLinks: [
        { icon: 'github', link: 'https://github.com/nghuyenthevinh2000/innovation-research' }
      ],
      search: {
        provider: 'local'
      },
      footer: {
        message: 'Lab-to-market materials: HarvardX LBTechX1 — Technology Entrepreneurship: Lab to Market. Analysis: Research essays, technology models, and reflections.',
        copyright: 'Innovation Research Hub'
      }
    }
  })
)
