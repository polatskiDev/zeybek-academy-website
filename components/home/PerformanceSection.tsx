import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function PerformanceSection() {
  const t = await getTranslations('home.performances');

  return (
    <section className="section-padding bg-primary/5 border-y border-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 bg-primary/10 rounded-2xl p-8 lg:p-10">
            <p className="text-brand-muted italic text-base leading-relaxed">
              {t('pastEvents')}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              {t('heading')}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4">{t('body1')}</p>
            <p className="text-brand-muted leading-relaxed mb-10">{t('body2')}</p>
            <CTAButton href="/events">{t('cta')}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
