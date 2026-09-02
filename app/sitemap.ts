import { MetadataRoute } from 'next';

export const dynamic = "force-static"/export 

const BASE_URL = 'https://zeybekacademy.nl';

const routes = [
  '/',
  '/zeybek',
  '/about-us',
  '/lessons',
  '/events',
  '/private-lessons',
  '/gallery',
  '/contact',
  '/faq',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const slug = route === '/' ? '' : route;

    entries.push({
      url: `${BASE_URL}${slug}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1.0 : 0.8,
    });
    entries.push({
      url: `${BASE_URL}/en${slug}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 0.9 : 0.7,
    });
    entries.push({
      url: `${BASE_URL}/nl${slug}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 0.9 : 0.7,
    });
  }

  return entries;
}
