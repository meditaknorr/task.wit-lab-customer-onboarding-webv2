import { targetCountryHelper } from './targetCountryHelper';

const regEX = {
  date: new RegExp('^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$', 'i'),
  number: new RegExp('[0-9]+', 'i'),
  address: new RegExp('[A-Za-z0-9.,\\s\u0080-\uFFFF/]+', 'g'),
  text: new RegExp('[A-Za-z\\s]+', 'g'),
};

export const dateValidator = () => {

};

export const numberValidator = () => {

};

export const addressValidator = () => {

};

export const textValidator = () => {

};

export const phoneNumberValidator = (phoneNumber, countryCode) => {
  const countrySetting = targetCountryHelper('countryRegex', countryCode);
  const result = countrySetting.test(phoneNumber);
  countrySetting.lastIndex = 0;
  return result;
};
