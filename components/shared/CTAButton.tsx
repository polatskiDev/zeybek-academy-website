import { Link } from '@/i18n/navigation';
import type { ComponentPropsWithoutRef } from 'react';

type Href = ComponentPropsWithoutRef<typeof Link>['href'];

interface CTAButtonProps {
  href: Href;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const variantClasses = {
  // Outlined with primary colour – use on light backgrounds
  primary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
  // Outlined white – use on dark/primary-colour backgrounds
  secondary: 'border-2 border-white text-white bg-transparent hover:bg-white/20',
  ghost: 'text-primary hover:text-primary-dark underline-offset-4 hover:underline',
} as const;

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

export function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 ease-in-out rounded-full hover:-translate-y-px active:translate-y-0 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
