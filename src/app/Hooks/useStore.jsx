import { useContext } from 'react';
import { AppContext } from '../Store/AppStore';

/**
 * React Custom Hooks to Share Store
 * @returns State
 */
const useStore = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      '[STORE:ERROR]: Sorry, something went wrong.',
    );
  }

  const {
    phone,
    setPhone,
    language,
    setLanguage,
  } = context;

  return {
    phone,
    setPhone,
    language,
    setLanguage,
  };
};

export { useStore };
