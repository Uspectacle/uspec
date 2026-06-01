import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { BACKGROUND_COLOR } from '@/components/Utils/DefaultStyle';
import { Providers } from '@/components/Utils/providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'uSPEC',
  description: 'uSPEC application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ backgroundColor: BACKGROUND_COLOR }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
