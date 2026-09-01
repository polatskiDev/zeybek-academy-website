import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.gallery' });
  return { title: t('title'), description: t('description') };
}

export default async function GaleriPage() {
  const t = await getTranslations('gallery');

  const sections = [
    {
      key: 'lessons' as const,
      images: [
        { src: '/images/group_lesson_ladies.jpeg', alt: 'Zeybek Academy group lesson in Amsterdam' },
        { src: '/images/IMG_8558.JPG', alt: 'Zeybek Academy students practising together' },
      ],
    },
    {
      key: 'performances' as const,
      images: [
        { src: '/images/wedding_group.jpg', alt: 'Zeybek performance at a wedding' },
        { src: '/images/wedding_profile.jpg', alt: 'Zeybek dancer performing at a wedding' },
        { src: '/images/9d44d6d9-f255-4537-bcd9-b0bdb2143dec.JPG', alt: 'Zeybek performers in traditional costume' },
      ],
    },
    {
      key: 'events' as const,
      images: [
        { src: '/images/19May_consulate.jpeg', alt: 'Zeybek Academy at a Turkish Consulate event' },
        { src: '/images/4D1ACE39-F038-40D6-8C65-A1C381D97535.JPG', alt: 'Zeybek dancers at an outdoor cultural event' },
        { src: '/images/ozkanorhankostumlu.JPG', alt: 'Zeybek Academy members in traditional costume' },
      ],
    },
  ];

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <section className="section-padding bg-white">
        <div className="container">
          {sections.map(({ key, images }) => (
            <div key={key} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-serif text-2xl font-bold text-brand-text">
                  {t(`${key}.heading`)}
                </h2>
              </div>
              <p className="text-brand-muted mb-8">{t(`${key}.desc`)}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* YouTube section */}
          <div className="mt-16 bg-background rounded-2xl p-8 border border-background-dark text-center">
            <h2 className="font-serif text-2xl font-bold text-brand-text mb-3">
              {t('video.heading')}
            </h2>
            <p className="text-brand-muted mb-6">{t('video.desc')}</p>
            <a
              href="https://www.youtube.com/@zeybekacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
              {t('video.cta')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
