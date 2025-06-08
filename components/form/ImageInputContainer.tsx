'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import Image from 'next/image';
import { Button } from '../ui/button';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';
import { type actionFunction } from '@/utils/types';
import { LuUser } from 'react-icons/lu';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

export default function ImageInputContainer({
  image,
  name,
  action,
  text,
  children,
}: ImageInputContainerProps) {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser className='w-24 h-24 bg-primary rounded text-white mb-4' />
  );

  const initialState = { message: '' };
  const [state, formAction] = useFormState(action, initialState);

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='rounded object-cover mb-4 w-24 h-24'
        />
      ) : (
        userIcon
      )}

      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>

      {isUpdateFormVisible && (
        <div className='max-w-lg mt-4'>
          <form action={formAction}>
            {children}
            <ImageInput />
            <SubmitButton size='sm' />

            {state?.message && (
              <p className='text-sm text-red-500 mt-2'>{state.message}</p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
