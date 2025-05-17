import { formatQuantity } from '@/utils/format';

type PropertyDetailsProps = {
  details: {
    aantal_gasten: number;
    aantal_medewerkers: number;
    aantal_tafels: number;
    aantal_bars: number;
  };
};

function PropertyDetails({
  details: { aantal_gasten, aantal_medewerkers, aantal_tafels, aantal_bars },
}: PropertyDetailsProps) {
  return (
    <p className='text-md font-light'>
      <span>{formatQuantity(aantal_gasten, 'gast')} &middot;</span>
      <span>{formatQuantity(aantal_medewerkers, 'medewerker')} &middot;</span>
      <span>{formatQuantity(aantal_tafels, 'tafel')} &middot;</span>
      <span>{formatQuantity(aantal_bars, 'bar')}</span>
    </p>
  );
}

export default PropertyDetails;
