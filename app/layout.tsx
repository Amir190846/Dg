import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, Alexandria } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plex = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-plex',
})

const alexandria = Alexandria({
  subsets: ['arabic'],
  variable: '--font-alexandria',
})

export const metadata: Metadata = {
  title: 'المطعم الفاخر | تجربة تذوق استثنائية',
  description: 'مطعم فاخر يقدم أشهى الأطباق الكلاسيكية بلمسة عصرية. اكتشف قائمة طعامنا واحجز طاولتك الآن.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`${plex.variable} ${alexandria.variable} smooth-scroll`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
