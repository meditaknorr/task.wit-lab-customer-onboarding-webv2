import { translations } from '../Locales/translations';

/**
 * React Custom Hooks For Injecting dynamically translation texts to  the App
 * @param browserlanguage
 * @returns { appString, appLanguages}
 */
export const useLocale = () => {
  const browserLanguage = (window.navigator.language).slice(0, 2);
  const appString = translations.filter((data) => (data.code === browserLanguage));

  /**
   * Return all languages that can be selected by the user
   * Except its browser language
   * @type Array
   */
  const appLanguages = translations.filter((data) => (data.code !== 'browserlanguage'))
    .map((data, keys) => ([{ key: keys, code: data.code, name: data.name }]));

  return {
    appString,
    appLanguages,
  };
};
