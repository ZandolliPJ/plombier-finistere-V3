import type { Metadata } from 'next'
import './globals.css'

// ============================================
// METADATA BASE - URL DU SITE
// ============================================
export const metadata: Metadata = {
  // 🔧 CORRECTION : Définir l'URL de base du site
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  // ============================================
  // TITRE OPTIMISÉ SEO
  // ============================================
  title: 'Plombier Électricien Commana (29) | Urgence 24/6 - Finistère',

  // ============================================
  // DESCRIPTION OPTIMISÉE
  // ============================================
  description: 'Plombier électricien à Commana (29). Urgence 24/6 dans tout le Finistère : dépannage, installation, rénovation. Devis gratuit. Artisan RGE. ⭐4.9/5',

  // ============================================
  // MOTS-CLÉS SEO
  // ============================================
  keywords: [
    'plombier Commana',
    'électricien Commana',
    'plombier Finistère',
    'électricien Finistère 29',
    'plombier 29450',
    'urgence plombier Commana',
    'plombier 24/6 Finistère',
    'artisan plombier Commana',
    'rénovation salle de bain Commana',
    'installation électrique Finistère',
    'plombier Sizun',
    'électricien Morlaix',
    'plombier RGE Finistère',
  ],

  // ============================================
  // AUTEUR
  // ============================================
  authors: [{ name: 'Lucien Flason - Artisan Plombier Électricien Commana' }],

  // ============================================
  // OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
  // ============================================
  openGraph: {
    title: 'Plombier Électricien Commana (29) | Urgence 24/6 - Finistère',
    description: 'Intervention rapide 6/7 dans tout le Finistère. Plomberie, électricité, chauffage. Devis gratuit. Artisan certifié RGE.',
    url: '/',
    siteName: 'Plombier Électricien Commana - Finistère',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/service-plomberie.jpg', // ✅ Chemin relatif maintenant
        width: 1200,
        height: 630,
        alt: 'Plombier professionnel Commana Finistère',
      },
      {
        url: '/images/service-electricite.jpg',
        width: 1200,
        height: 630,
        alt: 'Électricien professionnel Commana Finistère',
      },
    ],
  },

  // ============================================
  // TWITTER CARD
  // ============================================
  twitter: {
    card: 'summary_large_image',
    title: 'Plombier Électricien Commana | Urgence 24/6 Finistère',
    description: 'Intervention rapide 6/7. Plomberie, électricité, chauffage. Devis gratuit.',
    images: ['/images/service-plomberie.jpg'], // ✅ Chemin relatif
  },

  // ============================================
  // ROBOTS & INDEXATION
  // ============================================
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

  // ============================================
  // URL CANONIQUE
  // ============================================
  alternates: {
    canonical: '/',
  },

  // ============================================
  // VÉRIFICATION GOOGLE SEARCH CONSOLE
  // ============================================
  verification: {
    google: 'votre-code-verification-google', // À remplacer par votre code
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* GEO TAGS - SEO LOCAL */}
        <meta name="geo.region" content="FR-29" />
        <meta name="geo.placename" content="Commana" />
        <meta name="geo.position" content="48.4121;-3.9953" />
        <meta name="ICBM" content="48.4121, -3.9953" />

        {/* THEME COLOR */}
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}