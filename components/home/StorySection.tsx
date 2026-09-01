import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function StorySection() {
  const t = await getTranslations('home.story');
  const paragraphs = t('quote').split('\n\n');

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">{t('heading')}</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        <blockquote className="relative">
          {/* Decorative quote mark */}
          <span
            className="absolute -top-6 -left-4 text-8xl text-accent/20 font-serif leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <div className="relative space-y-5 pl-2">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-white/80 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </blockquote>

        <div className="mt-12 text-center">
          <CTAButton
            href="/about-us"
            variant="secondary"
          >
            {t('cta')}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
