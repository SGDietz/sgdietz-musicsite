import type { Metadata } from 'next';
import { Cormorant_Garamond, Oswald } from 'next/font/google';
import './globals.css';

const display = Oswald({ variable: '--font-display', subsets: ['latin'], weight: ['400','500','600','700'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['400','500','600','700'], style: ['normal','italic'] });

export const metadata: Metadata = {
  title: 'SG Dietz — Music for the Masses',
  description: 'Terrifyingly Original. Middle age is just the beginning. Original music by SG Dietz and his Mismatched Plaids.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=bronze-outline-4', sizes: '16x16 32x32 48x48' },
      { url: '/icon.png?v=bronze-outline-4', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png?v=bronze-outline-4', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={display.variable + ' ' + serif.variable}>{children}</body></html>;
}
