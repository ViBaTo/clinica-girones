import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios de Podología",
  description:
    "Descubre nuestros servicios de podología: quiropodia, estudio biomecánico, plantillas personalizadas, tratamiento de uñas encarnadas, pie diabético y más.",
  openGraph: {
    title: "Servicios de Podología | " + SEO_CONFIG.siteName,
    description:
      "Descubre nuestros servicios de podología: quiropodia, estudio biomecánico, plantillas personalizadas, tratamiento de uñas encarnadas, pie diabético y más.",
    url: SEO_CONFIG.siteUrl + "/servicios",
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl + "/servicios",
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
