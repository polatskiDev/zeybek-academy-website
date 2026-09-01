import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { Link } from '@/i18n/navigation';

import { WhatIsZeybekPage } from '@/components/zeybek/what-is-zeybek';
import { ZeybekHistoryPage } from '@/components/zeybek/zeybek-history';
import { ZeybekCulturePage } from '@/components/zeybek/zeybek-culture';
import { ZeybekDancePage } from '@/components/zeybek/zeybek-dance';
import { ZeybekPosturePage } from '@/components/zeybek/zeybek-posture';
import { ZeybekMusicPage } from '@/components/zeybek/zeybek-music';
import { ZeybekDancesPage } from '@/components/zeybek/zeybek-dances';
import { RepertoirePage } from '@/components/zeybek/zeybek-repertoire';
import { SectionArrow } from '@/components/zeybek/SectionArrow';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.zeybek' });
  return { title: t('title'), description: t('description') };
}

export default async function ZeybekHubPage() {
  const t = await getTranslations('zeybek.hub');

  return (
    <>
      <PageHero title="Zeybek" />

      <section className="section-padding bg-white">
        <div className="container max-w-3xl text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text mb-6">
            {t('heading')}
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body')}</p>
        </div>
      </section>

      <WhatIsZeybekPage />
      <SectionArrow />
      <ZeybekHistoryPage />
      <SectionArrow />
      <ZeybekCulturePage />
      <SectionArrow color="light" />
      <ZeybekDancePage />
      <SectionArrow />
      <ZeybekPosturePage />
      <SectionArrow />
      <ZeybekMusicPage />
      <SectionArrow color="light" />
      <ZeybekDancesPage />
      <SectionArrow />
      <RepertoirePage />
    </>
  );
}
