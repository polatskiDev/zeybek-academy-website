import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';
import { Link } from '@/i18n/navigation';

const cultureLinks = [
  { href: '/zeybek#what-is-zeybek', key: 'what' },
  { href: '/zeybek#history', key: 'history' },
  { href: '/zeybek#culture', key: 'culture' },
  { href: '/zeybek#dance', key: 'dance' },
  { href: '/zeybek#posture', key: 'posture' },
  { href: '/zeybek#music', key: 'music' },
  { href: '/zeybek#dances', key: 'dances' },
  { href: '/zeybek#repertoire', key: 'repertoire' },
] as const;

export async function CultureSection() {
  const t = await getTranslations('home.culture');
  const tNav = await getTranslations('nav.zeybekMenu');

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              {t('heading')}
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-10">{t('body')}</p>
            <CTAButton href="/zeybek">{t('cta')}</CTAButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cultureLinks.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 p-4 bg-background rounded-xl border border-background-dark hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-brand-text group-hover:text-primary font-medium transition-colors text-sm">
                  {tNav(key)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
