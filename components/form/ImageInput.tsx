import { Input } from '../ui/input';
import { Label } from '../ui/label';
import React, { forwardRef } from 'react';

type ImageInputProps = {
  error?: string;
};

// forwardRef nodig voor imageRef in oudercomponent
const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ error }, ref) => {
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
          required
          accept='image/*'
          className='max-w-xs'
          ref={ref}
        />
        {error && (
          <p className='text-red-500 text-sm mt-1'>{error}</p>
        )}
      </div>
    );
  }
);

ImageInput.displayName = 'ImageInput';
export default ImageInput;
