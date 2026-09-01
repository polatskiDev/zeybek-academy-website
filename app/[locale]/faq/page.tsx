import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';
import { Accordion } from '@/components/ui/Accordion';
import { SchemaOrg } from '@/components/seo/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.faq' });
  return { title: t('title'), description: t('description') };
}

export default async function SSSPage() {
  const t = await getTranslations('faq');
  const items = t.raw('items') as Array<{ q: string; a: string }>;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <SchemaOrg data={faqSchema} />
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <Accordion items={items} />

          <div className="mt-16 text-center bg-white rounded-2xl p-10 border border-background-dark">
            <p className="font-serif text-2xl font-bold text-brand-text mb-4">
              {t('stillQuestions')}
            </p>
            <CTAButton href="/contact">{t('contactCta')}</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
