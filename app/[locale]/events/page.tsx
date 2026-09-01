import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.events' });
  return { title: t('title'), description: t('description') };
}

export default async function GosterilerPage() {
  const t = await getTranslations('performances');
  const pastItems = t.raw('pastEvents.items') as string[];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        imageSrc="/images/wedding_profile.jpg"
        imageAlt="Zeybek performance at a wedding"
      />

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          {/* Performances */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-text mb-6">{t('performances.heading')}</h2>
            <p className="text-brand-muted leading-relaxed mb-4">{t('performances.body1')}</p>
            <p className="text-brand-muted leading-relaxed mb-4">{t('performances.body2')}</p>
            <p className="text-brand-muted leading-relaxed mb-4">{t('performances.body3')}</p>
            <p className="text-brand-muted leading-relaxed">{t('performances.body4')}</p>
          </div>

          {/* Past events */}
          <div className="mb-16 bg-background rounded-2xl p-8 border border-background-dark">
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-6">{t('pastEvents.heading')}</h2>
            <ul className="space-y-3">
              {pastItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-muted">
                  <span className="text-accent font-bold">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Wedding */}
          <div className="mb-16 bg-primary text-white rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold mb-4">{t('wedding.heading')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">{t('wedding.body')}</p>
            <CTAButton
              href="/contact"
              variant="secondary"
            >
              {t('wedding.cta')}
            </CTAButton>
          </div>

          {/* Social */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('social.heading')}</h2>
            <p className="text-brand-muted leading-relaxed">{t('social.body')}</p>
          </div>

          {/* Future */}
          <div className="bg-background rounded-2xl p-8 border border-background-dark">
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('future.heading')}</h2>
            <p className="text-brand-muted leading-relaxed">{t('future.body')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
