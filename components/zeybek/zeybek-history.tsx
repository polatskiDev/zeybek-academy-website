import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.history' });
  return { title: t('title'), description: t('description') };
}

export async function ZeybekHistoryPage() {
  const t = await getTranslations('zeybek.history');

  return (
    <section id="history" className="section-padding bg-background scroll-mt-28">
      <div className="container max-w-3xl space-y-6">
        <h2 className="font-serif text-center text-4xl md:text-5xl font-bold text-brand-text mb-10">
          {t('title')}
        </h2>
        <p className="text-brand-muted text-lg leading-relaxed">{t('body1')}</p>
        <p className="text-brand-muted text-lg leading-relaxed">{t('body2')}</p>
        <p className="text-brand-muted text-lg leading-relaxed">{t('body3')}</p>
      </div>
    </section>
  );
}
