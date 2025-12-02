import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'igreuhrvatskoj',
  description: 'Igreuhrvatskoj.com je vaš pouzdani vodič za online casina i sportsko klađenje u Hrvatskoj. Pronađite najbolje bonuse, ekskluzivne recenzije, savjete za sigurno igranje i najnovije informacije iz svijeta igara na sreću. Igrajte odgovorno i pametno uz lokalne preporuke!',
  generator: 'igreuhrvatskoj.com',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="hr">
      <body className={`font-sans antialiased`}>

          {children}
          <Analytics />
      </body>
    </html>
  )
}
