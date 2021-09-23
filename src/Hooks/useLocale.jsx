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
<<<<<<<< HEAD:src/Hooks/useLocale.jsx
  const appLanguages = translations.filter((data) => (data.code !== 'browserlanguage'))
========
  const appLanguages = strings.filter((data) => (data.code !== 'browserlanguage'))
>>>>>>>> origin/feature/CO-312:src/app/Hooks/useLocale.jsx
    .map((data, keys) => ([{ key: keys, code: data.code, name: data.name }]));

  return {
    appString,
    appLanguages,
  };
};
