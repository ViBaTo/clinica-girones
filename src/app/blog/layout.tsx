import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog de Podología",
  description:
    "Consejos, artículos y guías sobre el cuidado de los pies escritos por profesionales de la podología. Aprende a cuidar tus pies con nuestro blog.",
  openGraph: {
    title: "Blog de Podología | " + SEO_CONFIG.siteName,
    description:
      "Consejos, artículos y guías sobre el cuidado de los pies escritos por profesionales de la podología.",
    url: SEO_CONFIG.siteUrl + "/blog",
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl + "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
