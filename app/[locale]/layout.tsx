import type { Metadata } from 'next';
import { Roboto, Playfair_Display } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import '@/app/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: { template: '%s | Zeybek Academy', default: t('title') },
    description: t('description'),
    openGraph: {
      type: 'website',
      siteName: 'Zeybek Academy',
      locale:
        locale === 'tr' ? 'tr_TR' : locale === 'en' ? 'en_US' : 'nl_NL',
      images: [{ url: '/og/og-image.jpg', width: 1200, height: 630, alt: 'Zeybek Academy' }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical: '/',
      languages: { tr: '/', en: '/en', nl: '/nl', 'x-default': '/' },
    },
  };
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://zeybekacademy.nl/#organization',
  name: 'Zeybek Academy',
  description: "Amsterdam'da zeybek dansı ve kültürü öğreten akademi",
  url: 'https://zeybekacademy.nl',
  email: 'info@zeybekacademy.nl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
  sameAs: [
    'https://www.instagram.com/zeybekacademy',
    'https://www.facebook.com/zeybekacademy',
    'https://www.youtube.com/@zeybekacademy',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Tuesday',
    opens: '19:30',
    closes: '21:30',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-background text-brand-text font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <SchemaOrg data={businessSchema} />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
