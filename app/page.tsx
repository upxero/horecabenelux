import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import Hero from '@/components/home/Hero';
import Banner from '@/components/home/Banner';
import { Suspense } from 'react';
function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <section>
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
      <Banner /> 
    </section>
  );
}
export default HomePage;
