import { Metadata } from 'next';
import './globals.scss';
import { IBM_Plex_Sans, Inter } from 'next/font/google';

import { TITLE_BASE } from '@/constants/metadata';

const displayFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});
const sansFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata = {
  title: TITLE_BASE,
  description: 'Course website for CIS-1962: Javascript, Fall 2023',
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} ${displayFont.variable} overflow-y-scroll transition-colors scrollbar-thin scrollbar-track-background scrollbar-thumb-neutral-400 hover:scrollbar-thumb-foreground dark:scrollbar-thumb-neutral-700`}
      >
        {children}
      </body>
    </html>
  );
}
