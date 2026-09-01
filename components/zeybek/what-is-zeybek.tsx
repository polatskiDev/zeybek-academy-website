import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.what' });
  return { title: t('title'), description: t('description') };
}

export async function WhatIsZeybekPage() {
  const t = await getTranslations('zeybek.what');

  return (

    <section id="what-is-zeybek" className="section-padding bg-white scroll-mt-28">
      <div className="container text-white max-w-3xl">
          <h2 className="font-serif text-center text-4xl md:text-5xl font-bold text-brand-text mb-10">
            {t('title')}
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body1')}</p>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body2')}</p>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body3')}</p>

        <div className="mt-12 flex flex-wrap gap-4">
          <CTAButton href="/lessons">{t('cta')}</CTAButton>
        </div>
      </div>
    </section>
  );
}
