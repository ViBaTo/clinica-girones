import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce al equipo de Clínica Podológica Gironés. Más de 15 años de experiencia en podología en Madrid. Profesionales comprometidos con la salud de tus pies.",
  openGraph: {
    title: "Sobre Nosotros | " + SEO_CONFIG.siteName,
    description:
      "Conoce al equipo de Clínica Podológica Gironés. Más de 15 años de experiencia en podología en Madrid.",
    url: SEO_CONFIG.siteUrl + "/sobre-nosotros",
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl + "/sobre-nosotros",
  },
};

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
