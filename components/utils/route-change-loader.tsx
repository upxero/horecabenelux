'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingOverlay from '@/components/ui/loading-overlay';

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading
    setLoading(true);

    // Simuleer kort laden, anders is de overlay te snel weg
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // eventueel 800 ms als je wilt dat het wat langer blijft

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <LoadingOverlay /> : null;
}
