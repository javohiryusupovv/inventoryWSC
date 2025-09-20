import type { MetadataRoute } from "next";
import { newsData } from "../../constants/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inventory.uz";
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate.toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/uz`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uz/news`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/news`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate.toISOString(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamic news pages
  const newsPages: MetadataRoute.Sitemap = newsData.flatMap((article) => {
    const parsedDate = new Date(article.date);
    const lastModified = isNaN(parsedDate.getTime())
      ? currentDate.toISOString()
      : parsedDate.toISOString();

    return [
      {
        url: `${baseUrl}/news/${article.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/uz/news/${article.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      },
      {
        url: `${baseUrl}/en/news/${article.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      },
    ];
  });

  return [...staticPages, ...newsPages];
}
