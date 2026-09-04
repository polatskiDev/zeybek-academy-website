import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://zeybekacademy.nl'),
  icons: {
    icon: '/images/zeybekacademy-favicon.png',
    apple: '/images/zeybekacademy-favicon.png',
  },
};

// The [locale] layout owns <html> and <body>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
