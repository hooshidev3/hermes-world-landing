/**
 * English (en) translation table — source of truth.
 */

export const EN = {
  // Nav
  'nav.features': 'Features',
  'nav.hermeschiworld': 'HermesChiWorld',
  'nav.github': 'GitHub',
  'nav.docs': 'Docs',
  // Hero
  'hero.badge': 'Open Source',
  'hero.title': 'HermesChi',
  'hero.subtitle': 'The desktop workspace for AI agents — chat, files, memory, skills, and terminal in one place.',
  'hero.getStarted': 'Get Started',
  'hero.viewOnGithub': 'View on GitHub',
  'hero.stars': 'stars',
  // Setup
  'setup.title': 'Quick Start',
  'setup.subtitle': 'Up and running in under 60 seconds.',
  'setup.step1': 'Install',
  'setup.step2': 'Start the gateway',
  'setup.step3': 'Open the workspace',
  'setup.step1Desc': 'Run the installer',
  'setup.step2Desc': 'Start the Hermes Agent gateway',
  'setup.step3Desc': 'Open the workspace in your browser',
  // Features
  'features.title': 'Everything you need',
  'features.subtitle': 'A complete workspace for working with AI agents.',
  'features.chat.title': 'Agent Chat',
  'features.chat.desc': 'Stream responses, manage context, switch models mid-conversation.',
  'features.files.title': 'File Explorer',
  'features.files.desc': 'Browse, edit, and preview files with Monaco editor integration.',
  'features.memory.title': 'Memory',
  'features.memory.desc': 'Persistent agent memory across sessions with knowledge graphs.',
  'features.skills.title': 'Skills',
  'features.skills.desc': 'Install and manage reusable agent skills from the marketplace.',
  'features.terminal.title': 'Terminal',
  'features.terminal.desc': 'Built-in terminal with PTY support and command history.',
  'features.dashboard.title': 'Dashboard',
  'features.dashboard.desc': 'Analytics, cost tracking, and usage insights at a glance.',
  'features.swarm.title': 'Swarm',
  'features.swarm.desc': 'Multi-agent orchestration with mission control and kanban.',
  // HermesChiWorld
  'hermeschiworld.badge': 'Game Module',
  'hermeschiworld.title': 'HermesChiWorld',
  'hermeschiworld.subtitle': 'An open-world MMO where your AI agents live, quest, and build.',
  'hermeschiworld.desc': 'Built with HermesChi. HermesChiWorld is the flagship example: an open-world MMO where your AI agents become visible companions. They explore zones, complete quests, collect sigils, and keep working while the world keeps moving.',
  'hermeschiworld.visit': 'Visit HermesChiWorld',
  'hermeschiworld.play': 'Play Now',
  'hermeschiworld.builtWith': 'Built with HermesChi',
  // Screenshots
  'screenshots.title': 'See it in action',
  'screenshots.subtitle': 'A tour of the workspace.',
  // Footer
  'footer.product': 'Product',
  'footer.resources': 'Resources',
  'footer.community': 'Community',
  'footer.docs': 'Documentation',
  'footer.docker': 'Docker Setup',
  'footer.troubleshooting': 'Troubleshooting',
  'footer.github': 'GitHub',
  'footer.discord': 'Discord',
  'footer.version': 'HermesChi · v2',
  // Mobile CTA
  'mobileCta.getStarted': 'Get Started',
  'mobileCta.viewGithub': 'GitHub',
  // Language
  'language.toggle': 'فارسی',
  'language.english': 'English',
  'language.persian': 'فارسی',
  'settings.title': 'Settings',
} as const

export type TranslationKey = keyof typeof EN
