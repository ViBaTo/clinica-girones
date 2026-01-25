import type { Metadata } from "next";
import { SEO_CONFIG, CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${CLINIC_INFO.name}. Pide tu cita de podología en Madrid. Teléfono: ${CLINIC_INFO.phone}. Dirección: ${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.city}.`,
  openGraph: {
    title: "Contacto | " + SEO_CONFIG.siteName,
    description: `Contacta con ${CLINIC_INFO.name}. Pide tu cita de podología en Madrid.`,
    url: SEO_CONFIG.siteUrl + "/contacto",
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl + "/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
