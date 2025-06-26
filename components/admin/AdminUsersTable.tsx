import { fetchAllProfiles, deleteProfileById } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';

export default async function AdminUsersTable() {
  const profiles = await fetchAllProfiles();

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Alle gebruikers (profielen)</h2>
      <ul className="space-y-4">
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-medium">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-sm text-gray-600">{profile.email}</p>
            </div>
            <FormContainer action={deleteProfileById.bind(null, { profileId: profile.id })}>
              <button
                type="submit"
                className="text-red-600 hover:underline"
              >
                Verwijder
              </button>
            </FormContainer>
          </li>
        ))}
      </ul>
    </div>
  );
}

