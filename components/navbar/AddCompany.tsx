'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function AddCompany() {
  return (
    <>
      {/* Alleen zichtbaar als gebruiker is ingelogd */}
      <SignedIn>
        <Link href='/bedrijven/create'>
          <Button variant='outline'>Bedrijf toevoegen</Button>
        </Link>
      </SignedIn>

      {/* Als gebruiker NIET is ingelogd, toon login modal knop */}
      <SignedOut>
        <SignInButton mode='modal'>
          <Button variant='outline'>Bedrijf toevoegen</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}

