import React from 'react';
import '../styles/globals.css';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weights: ['400', '500', '700'] });

export const metadata = {
  title: 'Sara & Gio',
  description: 'Fino alla fine del mondo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Use Next.js Font Optimization instead of manually linking Google Fonts */}
        <style>{inter.style}</style>
        <style>{roboto.style}</style>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
