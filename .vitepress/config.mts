import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

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
      sidebar: {
        '/stages/': [
          {
            text: 'Lifecycle Stages',
            items: [
              { text: 'Overview & Framework', link: '/stages/' },
              { text: 'Stage 1: Discovery & Seeds', link: '/stages/stage-1-discovery-and-seeds' },
              { text: 'Stage 2: Problem Framing & P-H', link: '/stages/stage-2-problem-framing-and-ph' },
              { text: 'Stage 3: Needs-Seeds Synchronization', link: '/stages/stage-3-needs-seeds-synchronization' },
              { text: 'Stage 4: Business Architecture', link: '/stages/stage-4-business-architecture' },
              { text: 'Stage 5: Readiness & Cloverleaf', link: '/stages/stage-5-readiness-and-cloverleaf' },
              { text: 'Stage 6: Customer Validation & MVP', link: '/stages/stage-6-customer-validation-and-mvp' },
              { text: 'Stage 7: Venture De-risking & Capital', link: '/stages/stage-7-venture-derisking-and-capital' },
              { text: 'Stage 8: Spin-Offs & Scaling', link: '/stages/stage-8-spinoffs-and-scaling' }
            ]
          }
        ],
        '/guides/': [
          {
            text: 'How-To Playbooks',
            items: [
              { text: 'Deconstruct Technology Seeds', link: '/guides/how-to-deconstruct-technology-seeds' },
              { text: 'Reframe Stuck Problems', link: '/guides/how-to-reframe-stuck-problems' },
              { text: 'Design Discriminating Experiments', link: '/guides/how-to-design-discriminating-experiments' },
              { text: 'Audit Business Architecture', link: '/guides/how-to-audit-business-architecture' },
              { text: 'Audit & Expand Glossaries', link: '/guides/how-to-audit-and-expand-glossaries' }
            ]
          }
        ],
        '/glossaries/': [
          {
            text: 'Semantic Registry',
            items: [
              { text: 'Glossary Overview', link: '/glossaries/' },
              { text: 'Master Lexicon (60+ terms)', link: '/glossaries/master-glossary' },
              { text: 'Glossary Detection Guide', link: '/glossaries/glossary-detection-guide' }
            ]
          }
        ],
        '/mental-models/': [
          {
            text: 'Cognitive Architecture',
            items: [
              { text: 'Overview', link: '/mental-models/' },
              { text: 'Mental Models Catalog (17 Models)', link: '/mental-models/mental-models-catalog' },
              { text: 'Cognitive Traps & Anti-Patterns', link: '/mental-models/cognitive-traps-and-anti-patterns' }
            ]
          }
        ],
        '/structures/': [
          {
            text: 'Innovation Structures',
            items: [
              { text: 'Overview', link: '/structures/' },
              { text: 'Decision Matrices', link: '/structures/decision-matrices' },
              { text: 'Canvases & Worksheets', link: '/structures/canvases-and-worksheets' }
            ]
          }
        ],
        '/templates/': [
          {
            text: 'Templates & Rubrics',
            items: [
              { text: 'Stage-Gate Audit Template', link: '/templates/stage-gate-audit-template' },
              { text: 'Research Template', link: '/templates/research-template' }
            ]
          }
        ]
      },
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
