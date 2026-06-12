import './globals.css'

import { SerwistRegistrar } from '@components/ui/SerwistRegistrar'

import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin']
})

export const viewport: Viewport = {
  themeColor: '#164e63'
}

export const metadata: Metadata = {
  title: 'Larissa',
  description: 'Minha Flor',
  icons: {
    icon: [
      { url: '/pwa/icon-32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      {
        url: '/pwa/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        url: '/pwa/apple-touch-icon-167.png',
        sizes: '167x167',
        type: 'image/png'
      },
      {
        url: '/pwa/apple-touch-icon-152.png',
        sizes: '152x152',
        type: 'image/png'
      }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Larissa'
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${montserratSans.variable} antialiased`}>
        <SerwistRegistrar />
        {children}
      </body>
    </html>
  )
}
