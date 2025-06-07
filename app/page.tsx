import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import Hero from '@/components/home/Hero';
import Banner from '@/components/home/Banner';
import SuccessMessage from '@/components/home/SuccessMessage';
import { Suspense } from 'react';

function HomePage({
  searchParams,
}: {
  searchParams: {
    category?: string;
    search?: string;
    success?: string;
  };
}) {
  return (
    <section>
      <Hero />
      {/* ✅ Succesmelding tonen indien van toepassing */}
      <SuccessMessage success={searchParams.success} />

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
