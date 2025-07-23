import countries from 'world-countries';

const allowedCodes = ['NL', 'BE', 'LU'];

export const formattedCountries = countries
  .filter((item) => allowedCodes.includes(item.cca2))
  .map((item) => {
    // Handmatige vertaling naar Nederlands
    let nameNl = '';
    switch (item.cca2) {
      case 'NL':
        nameNl = 'Nederland';
        break;
      case 'BE':
        nameNl = 'België';
        break;
      case 'LU':
        nameNl = 'Luxemburg';
        break;
    }

    return {
      code: item.cca2,
      name: nameNl,
      flag: item.flag,
      location: item.latlng,
      region: item.region,
    };
  });

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};

