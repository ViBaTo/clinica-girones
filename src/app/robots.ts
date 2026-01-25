import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SEO_CONFIG.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/privacidad", "/aviso-legal"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
