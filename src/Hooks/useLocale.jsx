import { translations } from '../Locales/translations';

/**
 * React Custom Hooks For Injecting dynamically translation texts to  the App
 * >> appStrings returns strings to be rendered in whole app
 * >> appLanguages returns strings to be rendered only in the dropdown
 * param browserLanguage
 * @returns { appString, appLanguages }
 */
export const useLocale = (browserLanguage) => {
  const appString = (translations.filter((data) => (data.code === browserLanguage)))[0];

  /**
   * Return all languages that can be selected by the user
   * Except its browser language
   * @type Array
   */
  const appLanguages = (translations.filter((data) => (data.code === browserLanguage)))[0];

  return {
    appString,
    appLanguages,
  };
};
