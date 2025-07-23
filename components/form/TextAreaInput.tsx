import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
}

const tempDefaultDescription =
  'Een charmant familierestaurant met een Franse keuken en een moderne toets. Gelegen in het hartje van Antwerpen met zicht op de kathedraal. We bieden een seizoensgebonden menukaart, een uitgebreide wijnselectie, en warme gastvrijheid. Ideaal voor romantische diners, zakelijke lunches en gezellige familiebijeenkomsten.';

export default TextAreaInput;
