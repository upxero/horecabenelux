// components/admin/AdminPropertiesTable.tsx
import { fetchAllProperties } from '@/utils/actions';
import { deletePropertyAction } from '@/utils/actions';

export default async function AdminPropertiesTable() {
  const properties = await fetchAllProperties();

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Alle eigendommen</h2>
      <ul className="space-y-4">
        {properties.map((property) => (
          <li key={property.id} className="border p-4 rounded">
            <h3 className="font-semibold text-lg">{property.name}</h3>
            <p className="text-sm text-gray-600">{property.tagline}</p>
            <form action={deletePropertyAction} className="mt-2">
              <input type="hidden" name="propertyId" value={property.id} />
              <button type="submit" className="text-red-600 hover:underline">
                Verwijderen
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

