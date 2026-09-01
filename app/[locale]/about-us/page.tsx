import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });
  return { title: t('title'), description: t('description') };
}

export default async function HakkimizdaPage() {
  const t = await getTranslations('about');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          {/* Who we are */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-text mb-6">
              {t('whoWeAre.heading')}
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-4">{t('whoWeAre.body1')}</p>
            <p className="text-brand-muted text-lg leading-relaxed">{t('whoWeAre.body2')}</p>
          </div>

          {/* Story */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="relative min-h-80 overflow-hidden rounded-2xl">
              <Image
                src="/images/ozkanorhankostumlu.JPG"
                alt="Zeybek Academy founder in traditional zeybek costume"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
              <h2 className="font-serif text-3xl font-bold text-brand-text mb-6">
                {t('story.heading')}
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">{t('story.body1')}</p>
              <p className="text-brand-muted leading-relaxed mb-4">{t('story.body2')}</p>
              <p className="text-brand-muted leading-relaxed">{t('story.body3')}</p>
            </div>
          </div>

          {/* Why */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-brand-text mb-6">
              {t('why.heading')}
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">{t('why.body')}</p>
          </div>

          {/* Vision */}
          <div className="mb-12 bg-primary text-white rounded-2xl p-8">
            <h2 className="font-serif text-3xl font-bold mb-6">{t('vision.heading')}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{t('vision.body')}</p>
          </div>

          <CTAButton href="/contact">{t('cta')}</CTAButton>
        </div>
      </section>
    </>
  );
}
