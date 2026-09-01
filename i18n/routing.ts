import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en', 'nl'],
  defaultLocale: 'tr',
  // Turkish has no URL prefix; EN → /en/…, NL → /nl/…
  localePrefix: 'as-needed',
});
