'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  mainLinks: NavLink[];
}

export function MobileMenu({ isOpen, onClose, mainLinks }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between p-5 border-b border-background-dark">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Zeybek Academy home"
        >
          <Image
            src="/images/bgremoved_logo_zeybekacademy.png"
            alt="Zeybek Academy"
            width={72}
            height={72}
            priority
            className="h-16 w-16 object-contain"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-brand-text rounded-lg hover:bg-background transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="p-6 space-y-5">
        {mainLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href as Parameters<typeof Link>[0]['href']}
            onClick={onClose}
            className="block text-lg font-medium text-brand-text hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/lessons"
          onClick={onClose}
          className="block w-full text-center py-3 px-6 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors mt-4"
        >
          {mainLinks.find((l) => l.href === '/lessons')?.label ?? 'Dersler'}
        </Link>
      </nav>
    </div>
  );
}
