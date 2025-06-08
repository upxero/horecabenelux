import { Input } from '../ui/input';
import { Label } from '../ui/label';

function ImageInput() {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Afbeelding
      </Label>
      <Input
        id={name}
        name={name}
        type='file'
        accept='image/*'
        className='max-w-xs'
      />
    </div>
  );
}
export default ImageInput;
