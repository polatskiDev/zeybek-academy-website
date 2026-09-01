import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function CommunitySection() {
  const t = await getTranslations('home.community');

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-3xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-8">
          {t('heading')}
        </h2>
        <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
        <p className="text-brand-muted text-lg leading-relaxed mb-4">{t('body1')}</p>
        <p className="text-brand-muted text-lg leading-relaxed mb-10">{t('body2')}</p>
        <CTAButton href="/events" variant="primary">
          {t('cta')}
        </CTAButton>
      </div>
    </section>
  );
}
