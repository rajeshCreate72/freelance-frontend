import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://freelance-frontend-sooty.vercel.app",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
