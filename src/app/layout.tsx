import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Larissa: Flor',
  description: 'Flor para Flor'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
