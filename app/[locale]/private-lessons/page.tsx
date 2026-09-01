import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.privateLessons' });
  return { title: t('title'), description: t('description') };
}

export default async function OzelDerslerPage() {
  const t = await getTranslations('privateLessons');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <section className="section-padding bg-white">
        <div className="container max-w-3xl space-y-16">
          {/* Couple */}
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-background-dark">
            <div className="text-4xl mb-5" aria-hidden="true">💍</div>
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-5">
              {t('couple.heading')}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4">{t('couple.body1')}</p>
            <p className="text-brand-muted leading-relaxed mb-4">{t('couple.body2')}</p>
            <p className="text-brand-muted italic mb-6">{t('couple.note')}</p>
            <CTAButton href="/contact">{t('couple.cta')}</CTAButton>
          </div>

          {/* Individual */}
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-background-dark">
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-5">
              {t('individual.heading')}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">{t('individual.body')}</p>
            <CTAButton href="/contact">{t('individual.cta')}</CTAButton>
          </div>

          {/* Show */}
          <div className="bg-primary text-white rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-2xl font-bold mb-5">{t('show.heading')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">{t('show.body')}</p>
            <CTAButton
              href="/contact"
              variant="secondary"
            >
              {t('show.cta')}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
