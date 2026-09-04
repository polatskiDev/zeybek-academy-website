import { getTranslations } from 'next-intl/server';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';

export async function Hero() {
  const t = await getTranslations('home.hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* --- CIRCULAR MEDIA ELEMENTS (Absolute Positioning) --- */}
      {/* Left Circle - Image */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
        <Image
          src="/images/ozkanorhankostumlu.jpg" 
          alt="Hero visual left" 
          fill
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Circle - Video */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
        <Image
          src="/images/9d44d6d9-f255-4537-bcd9-b0bdb2143dec.jpg" 
          alt="Hero visual right" 
          fill
          priority
          className="w-full h-full object-cover"
        />
      </div>
      {/* ---------------------------------------------------- */}

      <div className="container relative text-center text-white py-32 pt-40 z-10">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
          {t('title')}
        </h1>

        <p className="text-accent font-semibold uppercase tracking-[0.35em] text-sm mb-6">
          {t('eyebrow')}
        </p>

        <div className="w-20 h-0.5 bg-accent mx-auto mb-8" />

        <p className="text-white/85 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/zeybek" variant="secondary" size="lg">
            {t('cta1')}
          </CTAButton>
          <CTAButton href="/lessons" variant="secondary" size="lg">
            {t('cta2')}
          </CTAButton>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div
          className="w-12 h-12 bg-white animate-scroll-arrow"
          style={{
            WebkitMaskImage: "url('/images/icons/down-arrow-svgrepo-com.svg')",
            maskImage: "url('/images/icons/down-arrow-svgrepo-com.svg')",
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
