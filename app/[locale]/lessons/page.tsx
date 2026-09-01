import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';
import { SchemaOrg } from '@/components/seo/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.lessons' });
  return { title: t('title'), description: t('description') };
}

export default async function DerslerPage() {
  const t = await getTranslations('lessons');

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Zeybek Dansı Kursu',
    description: "Amsterdam'da geleneksel zeybek dansı ve kültürü kursu",
    provider: {
      '@type': 'Organization',
      name: 'Zeybek Academy',
      url: 'https://zeybekacademy.nl',
    },
    courseMode: 'onsite',
    inLanguage: 'tr',
    location: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Amsterdam', addressCountry: 'NL' },
    },
  };

  const steps = t.raw('flow.steps') as string[];
  const forWhomItems = t.raw('forWhom.items') as string[];

  return (
    <>
      <SchemaOrg data={courseSchema} />
      <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subheading')} />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="relative mb-16 aspect-[16/7] overflow-hidden rounded-2xl">
            <Image
              src="/images/group_lesson_ladies.jpeg"
              alt="Zeybek Academy group lesson"
              fill
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
          {/* Quick info cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {(['schedule', 'duration', 'free', 'season'] as const).map((key) => (
              <div key={key} className="bg-background border-2 border-primary-light text-brand-muted rounded-full p-5 text-center">
                <p className="font-semibold text-sm md:text-base">{t(`details.${key}`)}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('level.heading')}</h2>
                <p className="text-brand-muted leading-relaxed">{t('level.body')}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('beginners.heading')}</h2>
                <p className="text-brand-muted leading-relaxed">{t('beginners.body')}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('language.heading')}</h2>
                <p className="text-brand-muted leading-relaxed">{t('language.body')}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('season.heading')}</h2>
                <p className="text-brand-muted leading-relaxed">{t('season.body')}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-4">{t('age.heading')}</h2>
                <p className="text-brand-muted leading-relaxed">{t('age.body')}</p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-6">{t('flow.heading')}</h2>
                <ol className="space-y-4">
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-brand-muted pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-text mb-6">{t('forWhom.heading')}</h2>
                <ul className="space-y-3">
                  {forWhomItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-muted">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-10 text-white text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">{t('firstLesson.heading')}</h2>
            <p className="text-white/90 text-lg mb-8">{t('firstLesson.body')}</p>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
            >
              {t('firstLesson.cta')}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
