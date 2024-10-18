import '../styles/globals.css'

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
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}