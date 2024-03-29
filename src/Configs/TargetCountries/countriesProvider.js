export const targetCountries = [
  {
    id: 1,
    code: 'mz',
    countryCode: 258,
    diallingCode: '+258',
    CountryName: 'Mozambique',
    nationalNumberLength: 9,
    operatorPrefixLength: 2,
    dummyNumber: '85 12 34 567',
    countryRegex: new RegExp('[8][2-7]\\d{7}', 'gm'),
  },
  {
    id: 2,
    code: 'zw',
    countryCode: 263,
    diallingCode: '+263',
    CountryName: 'Zimbabwe',
    nationalNumberLength: 9,
    operatorPrefixLength: 3,
    dummyNumber: '091 123 567',
    countryRegex: new RegExp('(091|011|023)\\d{6}', 'g'),
  },
];
