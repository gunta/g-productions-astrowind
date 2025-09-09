import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'G Combinator',
      href: getPermalink('/g-combinator'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: 'Apply to G Combinator',
      href: 'mailto:g-combinator@g-productions.studio?subject=G%20Combinator%20Application',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'G Combinator', href: getPermalink('/g-combinator') },
        { text: 'US Incorporation', href: getPermalink('/g-combinator#pricing') },
        { text: 'Japan Entity Formation', href: getPermalink('/g-combinator#pricing') },
        { text: 'Investment Advisory', href: getPermalink('/g-combinator#services') },
        { text: 'YC Application Support', href: getPermalink('/g-combinator#services') },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { text: 'Gathr.ly', href: 'https://gathr.ly/' },
        { text: 'PRiority', href: 'https://priority.run' },
        { text: 'EnvSchema', href: 'https://envschema.dev/' },
        { text: 'MCP Verified', href: 'https://mcpverified.com/' },
        { text: 'Code Agents', href: 'https://code-agents.com/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'About Us', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'G Productions', href: getPermalink('/') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/gproductions' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/g-productions' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/g-productions' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-xs"></span>
    Copyright <a class="text-blue-600 underline dark:text-muted" href="https://g-productions.studio/"> G Productions, LLC</a> · All rights reserved.
  `,
};
