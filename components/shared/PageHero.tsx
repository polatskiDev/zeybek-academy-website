import Image from 'next/image';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
}: PageHeroProps) {
  return (
    // <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
    <section className="relative min-h-[460px] md:min-h-[620px] bg-primary pt-32 pb-20 overflow-hidden">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
      )}
      {imageSrc && <div className="absolute inset-0 bg-brand-muted/70" aria-hidden="true" />}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative text-center text-white">
        {eyebrow && (
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-px bg-accent/60 mx-auto" />
      </div>
    </section>
  );
}
