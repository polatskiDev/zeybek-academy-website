import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '/', key: 'home' as const },
    { href: '/about-us', key: 'academy' as const },
    { href: '/lessons', key: 'lessons' as const },
    { href: '/events', key: 'events' as const },
    { href: '/private-lessons', key: 'privateLessons' as const },
    { href: '/gallery', key: 'gallery' as const },
    { href: '/contact', key: 'contact' as const },
    { href: '/faq', key: 'faq' as const },
  ];

  const socialMediaLinks = [
    {
      name: "Instagram",
      iconSrc: "/images/socialmedia/instagram.png",
      href: "https://www.instagram.com/zeybekacademy",
    },
    {
      name: "Facebook",
      iconSrc: "/images/socialmedia/facebook.png",
      href: "https://www.facebook.com/zeybekacademy",
    },
    {
      name: "YouTube",
      iconSrc: "/images/socialmedia/youtube.png",
      href: "https://youtube.com/@zeybekacademy",
    },
    {
      name: "WhatsApp",
      iconSrc: "/images/socialmedia/whatsapp.png",
      href: "https://wa.me/31627372746",
    },
  ] as const;

  return (
    <footer className="bg-brand-text text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif font-bold text-2xl text-white hover:text-accent transition-colors"
            >
              ZEYBEK ACADEMY
            </Link>
            <p className="mt-4 text-white/70 max-w-sm leading-relaxed">{t('tagline')}</p>
            <p className="mt-3 text-white/50 text-sm italic">{t('slogan')}</p>

            {/* Social media */}
            <div className="mt-3 flex flex-wrap gap-2">
              {socialMediaLinks.map((item) => (
                <a
                  key={item.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-600 bg-brand-700/50 transition hover:scale-105 hover:bg-brand-600/70"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${item.name} hesabina git`}
                  title={item.name}
                >
                  <Image
                    src={item.iconSrc}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">
              {t('pages')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href as Parameters<typeof Link>[0]['href']}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">
              Legal
            </h3>
            <div className="text-white/60 text-sm space-y-1">
              <p>{t('legal.company')}</p>
              <p>{t('legal.type')}</p>
              {/* TODO: replace placeholder once KvK number is available */}
              <p>{t('legal.kvk')}</p>
              <p className="mt-2 text-xs">{t('legal.address')}</p>
              <a
                href={`mailto:${t('contact.email')}`}
                className="mt-2 block hover:text-accent transition-colors"
              >
                {t('contact.email')}
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <Link href="/privacy" className="block text-white/60 hover:text-white text-sm transition-colors">
                {t('links.privacy')}
              </Link>
              <Link href="/terms" className="block text-white/60 hover:text-white text-sm transition-colors">
                {t('links.terms')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>{t('rights', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
