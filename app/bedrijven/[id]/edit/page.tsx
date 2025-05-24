import {
  fetchRentalDetails,
  updatePropertyImageAction,
  updatePropertyAction,
} from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import AddressInput from '@/components/form/AddressInput';
import CountriesInput from '@/components/form/CountriesInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';
import { SubmitButton } from '@/components/form/Buttons';
import { redirect } from 'next/navigation';
import { type Amenity } from '@/utils/amenities';
import ImageInputContainer from '@/components/form/ImageInputContainer';

async function EditRentalPage({ params }: { params: { id: string } }) {
  const property = await fetchRentalDetails(params.id);

  if (!property) redirect('/');

  const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>Bewerk bedrijf</h1>
      <div className='border p-8 rounded-md '>
        <ImageInputContainer
          name={property.name}
          text='Update Afbeelding'
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type='hidden' name='id' value={property.id} />
        </ImageInputContainer>

        <FormContainer action={updatePropertyAction}>
          <input type='hidden' name='id' value={property.id} />
          <div className='grid md:grid-cols-2 gap-8 mb-4 mt-8'>
            <FormInput
              name='name'
              type='text'
              label='Naam (max. 20 tekens)'
              defaultValue={property.name}
            />
            <FormInput
              name='tagline'
              type='text'
              label='Slogan (max. 30 tekens)'
              defaultValue={property.tagline}
            />
            <FormInput
              name='website'
              type='text'
              label='Website'
              defaultValue={property.website ?? ''}
              required={false}
            />
            <FormInput
              name='reservation'
              type='text'
              label='Reserveringslink'
              defaultValue={property.reservation ?? ''}
              required={false}
            />
            <FormInput
              name='facebook'
              type='text'
              label='Facebook-pagina'
              defaultValue={property.facebook ?? ''}
              required={false}
            />
            <FormInput
              name='instagram'
              type='text'
              label='Instagram-profiel'
              defaultValue={property.instagram ?? ''}
              required={false}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <AddressInput defaultValue={property?.address ?? ''} />
            <CountriesInput defaultValue={property.country} />
          </div>

          <TextAreaInput
            name='description'
            labelText='Beschrijving (10 - 1000 woorden)'
            defaultValue={property.description}
          />

          <h3 className='text-lg mt-10 mb-6 font-medium'>Voorzieningen</h3>
          <AmenitiesInput defaultValue={defaultAmenities} />
          <SubmitButton text='bewerk bedrijf' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditRentalPage;
