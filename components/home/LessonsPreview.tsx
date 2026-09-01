import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

const details = [
  'schedule', 'duration', 'noLevel', 'anyTime',
  'noExperience', 'onlyZeybek', 'language', 'free', 'season',
] as const;

export async function LessonsPreview() {
  const t = await getTranslations('home.lessons');

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              {t('heading')}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {t('subheading')}
            </h2>
            <div className="w-12 h-0.5 bg-accent mb-8" />
            <CTAButton
              href="/lessons"
              variant="secondary"
              size="lg"
            >
              {t('cta')}
            </CTAButton>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
            {details.map((key) => (
              <div key={key} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
