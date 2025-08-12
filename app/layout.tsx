import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mayfair Hotels & Resorts - A Beacon of Heartfelt Hospitality',
  description: 'Experience luxury hospitality across India with Mayfair Hotels & Resorts. Discover our world-class hotels and resorts in pristine beaches, snowy mountains, and heritage locations.',
  keywords: 'Mayfair Hotels, Luxury Hotels India, Resorts India, Hospitality, Hotels Bhubaneswar, Hotels Darjeeling, Hotels Goa',
  authors: [{ name: 'Mayfair Hotels & Resorts' }],
  openGraph: {
    title: 'Mayfair Hotels & Resorts',
    description: 'A Beacon of Heartfelt Hospitality',
    url: 'https://mayfairhotels.com',
    siteName: 'Mayfair Hotels & Resorts',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayfair Hotels & Resorts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayfair Hotels & Resorts',
    description: 'A Beacon of Heartfelt Hospitality',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 