import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  const messages = {
    tr: () => import('../messages/tr.json'),
    en: () => import('../messages/en.json'),
    nl: () => import('../messages/nl.json'),
  };

  const loadMessages = messages[locale as keyof typeof messages] || messages.tr;
  const currentMessages = await loadMessages();

  return {
    locale,
    messages: currentMessages.default,
  };
});
