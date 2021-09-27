import { translations } from '../Locales/translations';

/**
 * Country Icon Flag Helper,
 * Will help by providing providing icons references dynamically in our app
 * >> Icon image mapping function
 * @param code
 * @returns {*}
 */
function countryFlagHelper(code) {
  return (translations.filter((data) => (data.code === code)))[0].flag;
}

export default countryFlagHelper;
