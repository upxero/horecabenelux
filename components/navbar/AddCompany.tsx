'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AddCompany() {
  return (
    <Link href='/bedrijven/create'>
      <Button variant='outline'>Bedrijf toevoegen</Button>
    </Link>
  );
}
