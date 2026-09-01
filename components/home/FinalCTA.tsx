import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function FinalCTA() {
  const t = await getTranslations('home.finalCta');

  return (
    <section className="section-padding bg-primary">
      <div className="container max-w-3xl text-center text-white">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t('heading')}</h2>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">{t('body')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact" variant="secondary" size="lg">
            {t('cta1')}
          </CTAButton>
          <CTAButton href="/private-lessons" variant="secondary" size="lg">
            {t('cta2')}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
