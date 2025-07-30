import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';

import Banner from '@/components/home/Banner';
import { Suspense } from 'react';
function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <section>
      <section id="categories-list" className="mb-8">
        <CategoriesList
          category={searchParams.category}
          search={searchParams.search}
        />
      </section>
      <Suspense fallback={<LoadingCards />}>
        <section>
          <PropertiesContainer
            category={searchParams.category}
            search={searchParams.search}
          />
        </section>
      </Suspense>
      <section className="mt-20"> 
      <Banner /> 
      </section>
    </section>
  );
}
export default HomePage;
