import PropertyCard from '@/components/card/PropertyCard';
import { PropertyCardProps } from '@/utils/types';

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <div className="flex gap-4">
      {properties.map((property) => (
        <div key={property.id} className="min-w-[250px] sm:min-w-[300px] flex-shrink-0">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}

export default PropertiesList;



