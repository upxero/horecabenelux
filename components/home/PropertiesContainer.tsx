import { fetchProperties } from '@/utils/actions';
import PropertiesList from './PropertiesList';
import EmptyList from './EmptyList';
import { categories } from '@/utils/categories';
import type { PropertyCardProps } from '@/utils/types';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';  // importeer hier

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  if (category) {
    const properties: PropertyCardProps[] = await fetchProperties({
      category,
      search,
    });

    if (properties.length === 0) {
      return (
        <EmptyList
          heading='Geen resultaten gevonden.'
          message='Probeer je filters aan te passen of te verwijderen.'
          btnText='Filters wissen'
        />
      );
    }

    return (
      <div className="px-4">
        <PropertiesList properties={properties} />
      </div>
    );
  }

  const results = await Promise.all(
    categories.map(async (cat) => {
      const props: PropertyCardProps[] = await fetchProperties({
        category: cat.label,
        search,
      });
      return { category: cat.label, properties: props };
    })
  );

  const hasResults = results.some((r) => r.properties.length > 0);

  if (!hasResults) {
    return (
      <EmptyList
        heading="Geen resultaten gevonden."
        message="Probeer je filters aan te passen of te verwijderen."
        btnText="Filters wissen"
      />
    );
  }

  return (
    <div className="flex flex-col gap-8 px-4">
      {results.map(({ category, properties }) =>
        properties.length > 0 ? (
          <section key={category}>
            <h3 className="text-lg font-semibold mb-2 capitalize">{category}</h3>
            <ScrollArea className="py-8">
              <PropertiesList properties={properties} />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        ) : null
      )}
    </div>
  );
}

export default PropertiesContainer;



