import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// Correct the property name from `weights` to `weight`
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
        {/* Injecting the styles for fonts */}
        <style>{inter.style}</style>
        <style>{roboto.style}</style>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
