import FormContainer from '@/components/form/FormContainer';
import {
  updateProfileAction,
  fetchProfile,
  updateProfileImageAction,
} from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import ImageInputContainer from '@/components/form/ImageInputContainer';
async function ProfilePage() {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>mijn profiel</h1>
      <div className='border p-8 rounded-md '>
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text='Profielfoto updaten'
        />
        <FormContainer action={updateProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput
              type='text'
              name='firstName'
              label='Voornaam'
              defaultValue={profile.firstName}
            />
            <FormInput
              type='text'
              name='lastName'
              label='Achternaam'
              defaultValue={profile.lastName}
            />
            <FormInput
              type='text'
              name='username'
              label='Gebruikersnaam'
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text='update profiel' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
export default ProfilePage;
