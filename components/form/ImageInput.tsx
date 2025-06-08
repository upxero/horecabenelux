import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

function ImageInput() {
  const name = 'image';
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setError('Voeg een afbeelding toe');
    } else {
      setError('');
    }
  };

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
        onChange={handleChange}
        required // mag blijven voor desktop
      />
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  );
}

export default ImageInput;
