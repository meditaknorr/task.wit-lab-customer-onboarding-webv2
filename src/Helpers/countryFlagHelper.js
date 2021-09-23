import en from '../Assets/Images/icons/ic_en_lang.svg';
import pt from '../Assets/Images/icons/ic_pt_lang.svg';
import it from '../Assets/Images/icons/ic_it_lang.svg';

const images = {
  en,
  pt,
  it,
};

/**
 * Country Icon Flag Provider
 * Icon image mapping function
 * @param code
 * @returns {*}
 */
function countryFlagProvider(code) {
  return images[code];
}

export default countryFlagProvider;
