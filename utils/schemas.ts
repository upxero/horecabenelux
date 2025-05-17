import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  firstName: z.string().min(2, {
    message: 'voornaam moet minimaal 2 tekens lang zijn',
  }),
  lastName: z.string().min(2, {
    message: 'achternaam moet minimaal 2 tekens lang zijn',
  }),
  username: z.string().min(2, {
    message: 'gebruikersnaam moet minimaal 2 tekens bevatten',
  }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  console.log('ZOD input:', data);
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFilesTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'bestandsgrootte moet kleiner zijn dan 1 MB')
    .refine((file) => {
      return (
        !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
      );
    }, 'bestand moet een afbeelding zijn');
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'naam moet minimaal 2 tekens bevatten.',
    })
    .max(100, {
      message: 'naam moet korter zijn dan 100 tekens.',
    }),
  tagline: z
    .string()
    .min(2, {
      message: 'tagline moet minimaal 2 tekens lang zijn.',
    })
    .max(100, {
      message: 'tagline moet korter zijn dan 100 tekens.',
    }),
  price: z.coerce.number().int().min(0, {
    message: 'prijs moet een positief getal zijn.',
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'beschrijving moet tussen de 10 en 1000 woorden lang zijn.',
    }
  ),
  country: z.string(),
  aantal_gasten: z.coerce.number().int().min(0, {
    message: 'aantal gasten moet een positief getal zijn.',
  }),
  aantal_medewerkers: z.coerce.number().int().min(0, {
    message: 'aantal medewerkers moet een positief getal zijn.',
  }),
  aantal_tafels: z.coerce.number().int().min(0, {
    message: 'aantal tafels moet een positief getal zijn.',
  }),
  aantal_bars: z.coerce.number().int().min(0, {
    message: 'aantal bars moet een positief getal zijn.',
  }),
  amenities: z.string(),
});

export const createReviewSchema = z.object({
  propertyId: z.string(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().min(10).max(1000),
});
