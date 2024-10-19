

import { Inter, Roboto } from 'next/font/google';

// Import CSS to handle custom styles, not for fonts injected by Next.js
import '../styles/globals.css';

// Load Inter and Roboto fonts with Next.js optimized font loading
const inter = Inter({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className={roboto.className}>
      <style jsx global>{`
        html, body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}
