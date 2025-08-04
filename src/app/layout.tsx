import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserratSans = Montserrat({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'L: Flor de Aniversário',
  description: 'Flor de Aniversário'
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
