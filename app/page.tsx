'use client';

import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import Hero from '@/components/home/Hero';
import Banner from '@/components/home/Banner';
import { Suspense, useEffect, useState } from 'react';

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string; success?: string };
}) {
  const [showSuccess, setShowSuccess] = useState(
    searchParams.success === 'bedrijf-toegevoegd'
  );

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // verberg na 5 seconden

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <section>
      {showSuccess && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-sm shadow">
          ✅ Bedrijf succesvol toegevoegd!
        </div>
      )}
      <Hero />
      <section id="categories-list">
        <CategoriesList
          category={searchParams.category}
          search={searchParams.search}
        />
      </section>
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
      <section className="mt-20">
        <Banner />
      </section>
    </section>
  );
}

export default HomePage;
