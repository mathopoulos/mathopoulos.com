import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🚀 Lex Mathopoulos',
  description: 'Part time Designer, Engineer, & Product Manager. Currently focused on building some new health apps and making Trello great again.',
  metadataBase: new URL('https://mathopoulos.com'),
  openGraph: {
    title: '🚀 Lex Mathopoulos',
    description: 'Part time Designer, Engineer, & Product Manager. Currently focused on building some new health apps and making Trello great again.',
    url: 'https://mathopoulos.com',
    siteName: 'Lex Mathopoulos',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚀 Lex Mathopoulos',
    description: 'Part time Designer, Engineer, & Product Manager. Currently focused on building some new health apps and making Trello great again.',
    creator: '@lex_build',
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
    google: 'your-google-verification-code', // You'll need to add this later
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 