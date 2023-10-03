import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Fylo landing page with dark theme and features grid',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='max-w-screen'>
      <body className={`${open_sans.className} text-sm text-gray-300 bg-[#181f2a]`}>{children}</body>
    </html>
  )
}
