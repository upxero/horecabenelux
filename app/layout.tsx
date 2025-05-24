import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import { nlNL } from '@clerk/localizations'
import CookiePopup from '@/components/popup/cookie';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Horeca Benelux',
  description: 'Zoek, vind en plaats horecazaken, jobs, overnames en meer op Horeca Benelux – hét platform voor horeca in België, Nederland en Luxemburg.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={nlNL}>
      <html lang='nl' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className='container py-10'>{children}</main>
            <CookiePopup />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
