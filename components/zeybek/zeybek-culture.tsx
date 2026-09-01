import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.culture' });
  return { title: t('title'), description: t('description') };
}

export async function ZeybekCulturePage() {
  const t = await getTranslations('zeybek.culture');

  return (
    <section id="culture" className="section-padding bg-primary text-white scroll-mt-28">
      <div className="container max-w-3xl space-y-6">
        <h2 className="font-serif text-center text-4xl md:text-5xl font-bold mb-10">
          {t('title')}
        </h2>

        <p className="text-lg leading-relaxed">{t('body1')}</p>
        <p className="text-lg leading-relaxed">{t('body2')}</p>
        <p className="text-lg leading-relaxed">{t('body3')}</p>
        
        <div className="mt-6 w-16 h-px bg-accent/60 mx-auto" />
        
        <h3 className="font-serif text-xl font-bold mb-4 pa-2">
          {t('approachHeading')}
        </h3>
        <p className="leading-relaxed">{t('approachBody')}</p>
      </div>
    </section>
  );
}
