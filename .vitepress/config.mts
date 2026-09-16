import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { generateSidebar } from 'vitepress-sidebar'

const sidebarConfigs = [
  {
    documentRootPath: '.',
    scanStartPath: 'stages',
    resolvePath: '/stages/',
    rootGroupText: 'Lifecycle Stages',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: [
      'index.md',
      'stage-1-discovery-and-seeds.md',
      'stage-2-problem-framing-and-ph.md',
      'stage-3-needs-seeds-synchronization.md',
      'stage-4-business-architecture.md',
      'stage-5-market-assessment-and-mvp.md',
      'stage-6-venture-derisking-and-capital.md',
      'stage-7-spinoffs-and-scaling.md'
    ]
  },
  {
    documentRootPath: '.',
    scanStartPath: 'guides',
    resolvePath: '/guides/',
    rootGroupText: 'How-To Playbooks',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: '.',
    scanStartPath: 'glossaries',
    resolvePath: '/glossaries/',
    rootGroupText: 'Semantic Registry',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md', 'master-glossary.md']
  },
  {
    documentRootPath: '.',
    scanStartPath: 'mental-models',
    resolvePath: '/mental-models/',
    rootGroupText: 'Cognitive Architecture',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: '.',
    scanStartPath: 'structures',
    resolvePath: '/structures/',
    rootGroupText: 'Innovation Structures',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: '.',
    scanStartPath: 'templates',
    resolvePath: '/templates/',
    rootGroupText: 'Templates & Rubrics',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  }
]

export default withMermaid(
  defineConfig({
    title: "Innovation Research",
    description: "Lab-to-Market Documentation Hub & Operational Engine",
    base: process.env.BASE_URL || (process.env.GITHUB_ACTIONS ? '/innovation-research/' : '/'),
    ignoreDeadLinks: true,
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
        { text: 'Templates', link: '/templates/stage-gate-audit-template' }
      ],
      sidebar: generateSidebar(sidebarConfigs),
      socialLinks: [
        { icon: 'github', link: 'https://github.com/nghuyenthevinh2000/innovation-research' }
      ],
      search: {
        provider: 'local'
      },
      footer: {
        message: 'Released under open documentation principles.',
        copyright: 'Innovation Research Hub'
      }
    }
  })
)
