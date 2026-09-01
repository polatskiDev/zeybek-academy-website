import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.repertoire' });
  return { title: t('title'), description: t('description') };
}

export async function RepertoirePage() {
  const t = await getTranslations('zeybek.repertoire');

  return (
    <section id="repertoire" className="section-padding bg-background scroll-mt-28">
      <div className="container max-w-3xl">
        <h2 className="font-serif text-center text-4xl md:text-5xl font-bold text-brand-text mb-10">
          {t('title')}
        </h2>
        <div className="max-w-3xl mb-12">
          <p className="text-brand-muted text-lg leading-relaxed">{t('body')}</p>
        </div>

        {/* Repertoire table – data to be filled in later */}
        <div className="overflow-x-auto rounded-2xl border border-background-dark">
          <table className="w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                {(['name', 'region', 'character', 'level', 'description', 'video', 'season'] as const).map(
                  (col) => (
                    <th key={col} className="px-4 py-3 text-left font-semibold">
                      {t(`tableHeaders.${col}`)}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-brand-muted italic">
                  {t('comingSoon')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
