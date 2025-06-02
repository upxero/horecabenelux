// components/admin/AdminPropertiesTable.tsx
import { fetchAllProperties, deletePropertyAction } from '@/utils/actions';
import Link from 'next/link';
import FormContainer from '@/components/form/FormContainer';

export default async function AdminPropertiesTable() {
  const properties = await fetchAllProperties();

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Alle bedrijven</h2>
      <ul className="space-y-4">
        {properties.map((property) => (
          <li key={property.id} className="border p-4 rounded flex justify-between items-center">
            <h3 className="font-semibold text-lg">{property.name}</h3>
            <div className="flex gap-4 items-center">
              <Link href={`/admin/properties/${property.id}/edit`} className="text-blue-600 hover:underline">
                Bewerk
              </Link>
              <FormContainer action={deletePropertyAction}>
                <input type="hidden" name="propertyId" value={property.id} />
                <button type="submit" className="text-red-600 hover:underline">
                  Verwijderen
                </button>
              </FormContainer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
