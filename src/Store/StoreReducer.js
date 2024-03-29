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
    OTP: '1010',
    personalDetails: [],
  },
  media: [
    {
      id: 4,
      voterCardFront: null,
    },
    {
      id: 5,
      voterCardBack: null,
    },
    {
      id: 6,
      selfie: null,
    },
  ],
  demo: {
    errorOnSubmitAndValidation: '840005720',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    // USER ACTIONS
    case 'SET_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'SET_USER_PERSONALDETAILS':
      return {
        ...state,
        user: {
          ...state.user,
          personalDetails: [
            ...state.user.personalDetails,
            action.payload,
          ],
        },
      };
    case 'UPDATE_USER_PERSONALDETAILS':
      return {
        ...state,
        user: {
          ...state.user,
          personalDetails: [
            ...state.user.personalDetails,
            action.payload,
          ],
        },
      };
    case 'REMOVE_USER_PERSONALDETAILS':
      return {
        ...state,
        user: {
          ...state.user,
          personalDetails: [
            ...state.user.personalDetails.filter((block) => block.id !== action.payload.id),
          ],
        },
      };
    // APP CONFIG ACTIONS
    case 'SET_APP':
      return {
        ...state,
        app: {
          ...state.app,
          ...action.payload,
        },
      };
    // MEDIA ACTIONS
    case 'ADD_MEDIA': {
      const alreadyExists = state.media.find((block) => block.id === action.payload.id);
      if (alreadyExists) {
        return {
          ...state,
          media: [
            ...state.media.filter((block) => block.id !== action.payload.id),
            action.payload,
          ],
        };
      }
      return {
        ...state,
        media: [
          ...state.media,
          action.payload,
        ],
      };
    }
    case 'UPDATE_MEDIA':
      return {
        ...state,
        media: [
          ...state.media.filter((block) => block.id !== action.payload.id),
          action.payload,
        ],
      };
    case 'REMOVE_MEDIA':
      return {
        ...state,
        media: [
          ...state.media.filter((block) => block.id !== action.payload.id),
        ],
      };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};
