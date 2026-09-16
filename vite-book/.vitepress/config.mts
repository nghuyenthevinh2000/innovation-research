import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { generateSidebar } from 'vitepress-sidebar'

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
  }
]

export default withMermaid(
  defineConfig({
    title: "Innovation Research",
    description: "Lab-to-Market Documentation Hub & Operational Engine (Source: HarvardX LBTechX1: Technology Entrepreneurship: Lab to Market)",
    base: process.env.BASE_URL || (process.env.GITHUB_ACTIONS ? '/innovation-research/' : '/'),
    ignoreDeadLinks: true,
    srcExclude: ['templates/**'],
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
        { text: 'Structures', link: '/structures/' }
      ],
      sidebar: generateSidebar(sidebarConfigs),
      socialLinks: [
        { icon: 'github', link: 'https://github.com/nghuyenthevinh2000/innovation-research' }
      ],
      search: {
        provider: 'local'
      },
      footer: {
        message: 'All materials are from source: HarvardX LBTechX1 — Technology Entrepreneurship: Lab to Market.',
        copyright: 'Innovation Research Hub'
      }
    }
  })
)
