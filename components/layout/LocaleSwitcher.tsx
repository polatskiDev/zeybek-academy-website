'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const labels: Record<string, string> = { tr: 'TR', en: 'EN', nl: 'NL' };

interface LocaleSwitcherProps {
  isScrolled?: boolean;
}

export function LocaleSwitcher({ isScrolled = true }: LocaleSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1" role="navigation" aria-label="Language switcher">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => router.replace(pathname, { locale: l })}
            aria-label={`Switch to ${labels[l]}`}
            aria-current={l === locale ? 'true' : undefined}
            className={`text-sm font-bold transition-colors px-1 ${
              l === locale
                ? isScrolled
                  ? 'text-primary'
                  : 'text-white'
                : isScrolled
                ? 'text-brand-muted hover:text-primary'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {labels[l]}
          </button>
          {i < routing.locales.length - 1 && (
            <span
              className={`text-xs select-none ${isScrolled ? 'text-brand-subtle' : 'text-white/40'}`}
            >
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
