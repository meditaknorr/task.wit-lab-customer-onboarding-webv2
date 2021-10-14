import { targetCountries } from '../Configs/TargetCountries/countriesProvider';

export const targetCountryHelper = (element, countryCode) => {
  const target = (targetCountries.filter((data) => data.countryCode === countryCode))[0];
  return target[element];
};

export const availableCountries = (targetCountries.map((data) => ({
  id: data.id,
  code: data.code,
  diallingCode: data.diallingCode,
  countryName: data.CountryName,
})));

export const phoneNumberValidator = (phoneNumber, countryCode) => {
  const countrySetting = targetCountryHelper('countryRegex', countryCode);
  const result = countrySetting.test(phoneNumber);
  countrySetting.lastIndex = 0;
  return result;
};
