import './globals.css'
import {  Barlow_Condensed } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'OuterWorld',
  description: 'Come explore the world beyond with us!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlowCondensed.className}>{children}</body>
    </html>
  )
}
