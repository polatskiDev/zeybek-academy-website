'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Logo is the home link; Ana Sayfa is intentionally excluded from the nav list
  const mainLinks = [
    { href: '/zeybek', label: t('zeybek') },
    { href: '/about-us', label: t('academy') },
    { href: '/lessons', label: t('lessons') },
    { href: '/events', label: t('events') },
    { href: '/private-lessons', label: t('privateLessons') },
    { href: '/gallery', label: t('gallery') },
    { href: '/contact', label: t('contact') },
  ];


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
            aria-label="Zeybek Academy home"
          >
            <Image
              src="/images/bgremoved_logo_zeybekacademy.png"
              alt="Zeybek Academy"
              width={96}
              height={96}
              priority
              className={`h-24 w-24 object-contain transition-all duration-300 ${
                scrolled ? '' : 'rounded-full bg-white/90 p-1'
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden pl-inherit lg:flex items-center gap-5 xl:gap-6" aria-label="Main navigation">

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as Parameters<typeof Link>[0]['href']}
                className={`text-lg font-bold transition-colors ${
                  scrolled ? 'text-brand-text hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <span
              className={`h-5 w-px ${scrolled ? 'bg-brand-subtle/40' : 'bg-white/30'}`}
              aria-hidden="true"
            />
            <LocaleSwitcher isScrolled={scrolled} />
          </nav>

          {/* Mobile: locale switcher + hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <LocaleSwitcher isScrolled={scrolled} />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`p-2 transition-colors ${scrolled ? 'text-brand-text' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        mainLinks={mainLinks}
      />
    </>
  );
}
