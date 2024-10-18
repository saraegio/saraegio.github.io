import '../styles/globals.css'

import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Sara & Gio',
  description: 'Fino alla fine del mondo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
