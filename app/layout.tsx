// layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RouteChangeLoader from '@/components/utils/route-change-loader';
import ScrollToTop from '@/components/utils/scroll-to-top';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import { nlNL } from '@clerk/localizations';
import CookiePopup from '@/components/popup/cookie';
import MessengerButton from "@/components/socials/MessengerButton";
import WhatsAppButton from "@/components/socials/WhatsAppButton";
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Horeca Benelux',
  description: 'Zoek, vind en plaats horecazaken, jobs, overnames en meer op Horeca Benelux – hét platform voor horeca in België, Nederland en Luxemburg.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <RouteChangeLoader />
        <ScrollToTop />
        <ClerkProvider localization={nlNL}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </ClerkProvider>
        <Footer />
        <MessengerButton />
        <WhatsAppButton />
        <CookiePopup />
        <Toaster />
      </body>
    </html>
  );
}
