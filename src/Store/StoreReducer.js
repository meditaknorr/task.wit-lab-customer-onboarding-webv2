import { whitelist } from '../Locales/whitelist';

/**
 * Language White List Checker
 * >> Determines if the detected language
 * Is available to be used on the app or not
 * Return detected browser language or the default 'eng' language
 * @param browserLanguage
 * @returns string
 */
const whitelistChecker = (browserLanguage) => {
  const result = whitelist.filter((data) => (data === browserLanguage));
  return (result[0] ? browserLanguage : 'en');
};

export const initialState = {
  app: {
    id: 1,
    language: whitelistChecker((window.navigator.language).slice(0, 2)),
    defaultCountry: 'Mozambique',
    defaultCountryCallingCode: '+258',
    defaultCountryCode: 258,
  },
  user: {
    id: 2,
    phoneCallingCode: null,
    countryCode: null,
    phoneNumber: null,
    countryName: null,
    storePropertyName: null,
    voterCardFront: null,
    voterCardBack: null,
    selfie: null,
    OTP: '1010',
    personalDetails: [],
  },
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'SET_APP':
      return {
        ...state,
        app: {
          ...state.app,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
