import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://zeybekacademy.nl'),
};

// The [locale] layout owns <html> and <body>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
