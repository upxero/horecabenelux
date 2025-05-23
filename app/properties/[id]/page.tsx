import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import ImageContainer from '@/components/properties/ImageContainer';
import { FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';
import ShareButton from '@/components/properties/ShareButton';
import UserInfo from '@/components/properties/UserInfo';
import { Separator } from '@/components/ui/separator';
import { fetchPropertyDetails, findExistingReview } from '@/utils/actions';
import { redirect } from 'next/navigation';
import Description from '@/components/properties/Description';
import Amenities from '@/components/properties/Amenities';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import SubmitReview from '@/components/reviews/SubmitReview';
import PropertyReviews from '@/components/reviews/PropertyReviews';
import { auth } from '@clerk/nextjs/server';
const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  }
);

const DynamicBookingWrapper = dynamic(
  () => import('@/components/booking/BookingWrapper'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[200px] w-full' />,
  }
);

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect('/');
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  const { userId } = auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));
  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-4xl font-bold capitalize'>{property.tagline}</h1>
        <div className='flex items-center gap-x-4'>
          {/* share button */}
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{property.name} </h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className='mt-4' />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className='lg:col-span-4 flex flex-col items-center mt-6 lg:mt-0'>
          {/* website */}
          <div className="flex flex-col gap-4 w-full">
          {property.website && (
            <a
              href={property.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-center px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Bezoek website
            </a>
          )}

          {property.reservation && (
            <a
              href={property.reservation}
              className='btn btn-primary flex items-center gap-2'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLink /> Reserveer
            </a>
          )}

          {property.facebook && (
            <a
              href={property.facebook}
              className='btn btn-outline flex items-center gap-2 text-blue-600'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook /> Facebook
            </a>
          )}

          {property.instagram && (
            <a
              href={property.instagram}
              className='btn btn-outline flex items-center gap-2 text-pink-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram /> Instagram
            </a>
          )}
        </div>
        </div>
      </section>
      {/* after two column section */}
      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>
  );
}

export default PropertyDetailsPage;
