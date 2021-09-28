/**
 * Country Icon Flag Helper,
 * Will help by providing providing icons references dynamically in our app
 * >> Icon image mapping function
 * @param code
 * @returns {*}
 */
function countryFlagHelper(code) {
  return `../resources/images/icons/ic_${code}_lang.svg`;
}

export default countryFlagHelper;
