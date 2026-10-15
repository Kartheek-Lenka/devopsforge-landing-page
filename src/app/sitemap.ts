import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Only the public marketing page is listed. The main application requires
 * authentication, so its routes are intentionally excluded from the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
