import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createPropertyAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import PriceInput from '@/components/form/PriceInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CountriesInput from '@/components/form/CountriesInput';
import ImageInput from '@/components/form/ImageInput';
import CounterInput from '@/components/form/CounterInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';
function CreatePropertyPage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
      bedrijf toevoegen
      </h1>
      <div className='border p-8 rounded'>
        <h3 className='text-lg mb-4 font-medium'>Algemene informatie</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Naam (max. 20 tekens)'
              defaultValue='De Gouden Lepel'
            />
            <FormInput
              name='tagline'
              type='text'
              label='Slogan (max. 30 tekens)'
              defaultValue='Waar smaak en sfeer samenkomen'
            />
            {/* price */}
            <PriceInput />
            {/* categories */}
            <CategoriesInput />
          </div>
          {/* text area / description */}
          <TextAreaInput
            name='description'
            labelText='Beschrijving (10 - 1000 woorden)'
          />
          <div className='grid sm:grid-cols-2 gap-8 mt-4'>
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">Bedrijfsdetails</h3>
          <CounterInput detail="aantal_gasten" />
          <CounterInput detail="aantal_medewerkers" />
          <CounterInput detail="aantal_tafels" />
          <CounterInput detail="aantal_bars" />
          <h3 className='text-lg mt-10 mb-6 font-medium'>Voorzieningen</h3>
          <AmenitiesInput />
          <SubmitButton text='Bedrijf toevoegen' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreatePropertyPage;
