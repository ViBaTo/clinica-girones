import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { InsurancePartners } from '@/components/sections'
import { SEO_CONFIG, CLINIC_INFO } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [
    'podología',
    'podólogo València',
    'clínica podológica',
    'quiropodia',
    'plantillas personalizadas',
    'pie diabético',
    'podología deportiva',
    'uñas encarnadas',
    'estudio de la pisada',
    'tratamiento podológico'
  ],
  authors: [{ name: CLINIC_INFO.name }],
  creator: CLINIC_INFO.name,
  publisher: CLINIC_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: SEO_CONFIG.defaultImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.siteName
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultImage],
    creator: SEO_CONFIG.twitterHandle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl
  }
}

// Schema.org structured data for local business
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: CLINIC_INFO.name,
  description: CLINIC_INFO.description,
  url: SEO_CONFIG.siteUrl,
  telephone: CLINIC_INFO.phone,
  email: CLINIC_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC_INFO.address.street,
    addressLocality: CLINIC_INFO.address.city,
    postalCode: CLINIC_INFO.address.postalCode,
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.42',
    longitude: '-3.7'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00'
    }
  ],
  medicalSpecialty: 'Podiatry',
  priceRange: '€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150'
  },
  sameAs: [CLINIC_INFO.socialMedia.instagram]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className={inter.variable}>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className='font-sans antialiased'>
        <Header />
        <main>{children}</main>
        <InsurancePartners />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
