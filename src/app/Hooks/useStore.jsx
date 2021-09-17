import { useContext } from 'react';
import { AppContext } from '../Store/AppStore';

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
    browserlanguage,
    setBrowserlanguage,
  } = context;

  return {
    phone,
    setPhone,
    browserlanguage,
    setBrowserlanguage,
  };
};

export { useStore };
