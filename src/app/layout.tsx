import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio - Elmer Jacobo',
  description: 'Elmer Jacobo Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`min-h-screen ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
