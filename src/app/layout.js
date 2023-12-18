import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yogyakarta ATIS Website',
  description: 'Providing ATIS service for Yogyakarta FIR',
  
  // Open Graph
  ogTitle: 'Yogyakarta ATIS Website',
  ogDescription: 'Providing ATIS service for Yogyakarta FIR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
