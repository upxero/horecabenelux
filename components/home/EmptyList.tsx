import Link from 'next/link';
import { Button } from '../ui/button';
function EmptyList({
  heading = 'Geen items in de lijst.',
  message = 'Ontdek meer horecazaken op ons platform',
  btnText = 'Terug naar startpagina',
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-bold'>{heading}</h2>
      <p className='text-lg'>{message}</p>
      <Button asChild className='mt-4 capitalize' size='lg'>
        <Link href='/'>{btnText}</Link>
      </Button>
    </div>
  );
}
export default EmptyList;
