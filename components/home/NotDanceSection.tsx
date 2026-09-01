import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function NotDanceSection() {
  const t = await getTranslations('home.notDance');

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-4xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
          {t('heading')}
        </h2>
        <p className="text-accent font-semibold text-lg md:text-xl italic mb-8">
          {t('subheading')}
        </p>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-brand-muted text-lg leading-relaxed mb-4">{t('body1')}</p>
        <p className="text-brand-muted text-lg leading-relaxed mb-10">{t('body2')}</p>
        <CTAButton href="/zeybek">{t('cta')}</CTAButton>
      </div>
    </section>
  );
}
