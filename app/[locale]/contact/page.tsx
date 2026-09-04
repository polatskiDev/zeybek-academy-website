import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/shared/PageHero';
import { ContactForm } from '@/components/shared/ContactForm';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });
  return { title: t('title'), description: t('description') };
}

export default async function IletisimPage() {
  const t = await getTranslations('contact');

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
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-text mb-4">
                {t('heading')}
              </h2>
              <p className="text-brand-muted leading-relaxed mb-10">{t('body')}</p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">
                      {t('emailLabel')}
                    </p>
                    <a
                      href={`mailto:${t('email')}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {t('email')}
                    </a>
                  </div>
                </div>

                {/* Social media */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
                    {t('socialLabel')}
                  </p>
                  <div className="flex gap-4">
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
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-text mb-8">
                {t('form.heading')}
              </h2>
              <ContactForm />
              {/* Hidden fallback form for Netlify's build-time crawler */}
              <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
                <input type="hidden" name="form-name" value="contact" />
                <input name="bot-field" />
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <select name="service">
                  <option value="weekly">Haftalık ders</option>
                  <option value="private">Özel ders</option>
                  <option value="couple">Gelin-damat dersi</option>
                  <option value="wedding">Düğün gösterisi</option>
                  <option value="other">Diğer</option>
                </select>
                <textarea name="message"></textarea>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
