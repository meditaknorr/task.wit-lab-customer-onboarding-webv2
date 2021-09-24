import { translations } from '../Locales/translations';

/**
 * React Custom Hooks For Injecting dynamically translation texts to  the App
 * @param browserlanguage
 * @returns { appString, appLanguages}
 */
export const useLocale = (browserlanguage) => {
  const appString = translations.filter((data) => (data.code === browserlanguage));

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
