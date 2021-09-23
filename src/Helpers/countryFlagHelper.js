import en from '../Assets/Images/icons/ic_en_lang.svg';
import pt from '../Assets/Images/icons/ic_pt_lang.svg';
import it from '../Assets/Images/icons/ic_it_lang.svg';

const images = {
  en,
  pt,
  it,
};

/**
 * Country Icon Flag Helper,
 * Will help by providing providing icons references dynamically in our app
 * >> Icon image mapping function
 * @param code
 * @returns {*}
 */
function countryFlagHelper(code) {
  return images[code];
}

export default countryFlagHelper;
