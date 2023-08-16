import { Ubuntu } from 'next/font/google'
import '@/styles/globals.scss'
import type { Metadata } from 'next'

// Main site font
const mainFont = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: 'Wojtek Kulak',
  description: 'Personal website & portfolio of Wojtek Kulak.',
}

// Root website layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        {children}
      </body>
    </html>
  )
}
