import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plombier Électricien Commana (29450) - Interventions Rapides Finistère',
  description: 'Plombier et électricien professionnel à Commana et dans tout le Finistère (29). Dépannage urgent 7j/7, installation, rénovation. Devis gratuit.',
  keywords: 'plombier Commana, électricien Commana, plombier Finistère, électricien Finistère, dépannage plomberie 29, dépannage électricité 29, plombier 29450',
  authors: [{ name: 'Plomberie Électricité Finistère' }],
  openGraph: {
    title: 'Plombier Électricien à Commana (29450) - Finistère',
    description: 'Services de plomberie et électricité professionnels dans le Finistère. Interventions rapides à Commana et alentours.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              "name": "Plomberie Électricité Finistère",
              "description": "Services de plomberie et électricité à Commana et dans tout le Finistère",
              "image": "https://votre-site.com/logo.jpg",
              "telephone": "+33-06-98-35-08-71",
              "email": "flason.lucien29450@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 bis rue Penavern",
                "addressLocality": "Commana",
                "postalCode": "29450",
                "addressRegion": "Bretagne",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.413057,
                "longitude": -3.955789
              },
              "url": "https://www.boostezvotrerenovation.fr",
              "priceRange": "€€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "areaServed": {
                "@type": "State",
                "name": "Finistère"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de plomberie et électricité",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dépannage plomberie",
                      "description": "Interventions urgentes en plomberie 7j/7"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dépannage électricité",
                      "description": "Interventions urgentes en électricité 7j/7"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
