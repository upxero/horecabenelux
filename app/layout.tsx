import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import { nlNL } from '@clerk/localizations'
import CookiePopup from '@/components/popup/cookie';
import MessengerButton from "@/components/socials/MessengerButton";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Horeca Benelux',
  description: 'Zoek, vind en plaats horecazaken, jobs, overnames en meer op Horeca Benelux – hét platform voor horeca in België, Nederland en Luxemburg.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider localization={nlNL}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </ClerkProvider>
        <Footer />
        <MessengerButton />
        <CookiePopup />
      </body>
    </html>
  );
}

