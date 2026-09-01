import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.dance' });
  return { title: t('title'), description: t('description') };
}

export async function ZeybekDancePage() {
  const t = await getTranslations('zeybek.dance');
  const items = t.raw('approachItems') as string[];

  return (
    <section id="dance" className="section-padding bg-white scroll-mt-28">
      <div className="container max-w-3xl">
        <div className="space-y-6 mb-12">
          <h2 className="font-serif text-center text-4xl md:text-5xl font-bold text-brand-text mb-10">
            {t('title')}
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body1')}</p>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body2')}</p>
          <p className="text-brand-muted text-lg leading-relaxed">{t('body3')}</p>
        </div>

        <div className="bg-background rounded-2xl p-8 border border-background-dark">
          <h3 className="font-serif text-xl font-bold text-brand-text mb-6">
            {t('approachHeading')}
          </h3>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-brand-muted">
                <span className="text-accent font-bold text-lg leading-none mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
