import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { NotDanceSection } from '@/components/home/NotDanceSection';
import { WhyLearnSection } from '@/components/home/WhyLearnSection';
import { LessonsPreview } from '@/components/home/LessonsPreview';
import { CultureSection } from '@/components/home/CultureSection';
import { CommunitySection } from '@/components/home/CommunitySection';
import { PerformanceSection } from '@/components/home/PerformanceSection';
import { PrivateLessonsTeaser } from '@/components/home/PrivateLessonsTeaser';
import { StorySection } from '@/components/home/StorySection';
import { FinalCTA } from '@/components/home/FinalCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  return { title: t('title'), description: t('description') };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <NotDanceSection />
      <WhyLearnSection />
      <LessonsPreview />
      <CultureSection />
      <CommunitySection />
      <FinalCTA />
      <PrivateLessonsTeaser />
      <PerformanceSection />
      <StorySection />
    </>
  );
}
