import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';

export async function PrivateLessonsTeaser() {
  const t = await getTranslations('home.privateLessons');

  const services = [
    { key: 'couple', icon: '💍' },
    { key: 'individual', icon: ' ' },
    { key: 'show', icon: ' ' },
  ] as const;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text">
            {t('heading')}
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="bg-background rounded-2xl p-8 border border-background-dark text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
              <h3 className="font-serif text-xl font-bold text-brand-text">
                {t(key)}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-brand-muted italic mb-6">{t('note')}</p>
          <CTAButton href="/private-lessons">{t('cta')}</CTAButton>
        </div>
      </div>
    </section>
  );
}
