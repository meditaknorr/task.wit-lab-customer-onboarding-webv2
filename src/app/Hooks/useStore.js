import { useContext } from 'react';
import { AppContext } from '../Store/AppStore';

const useStore = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      '[STORE:ERROR]: Sorry, something went wrong.',
    );
  }

  const { phone, setPhone } = context;
  return { phone, setPhone };
};

export { useStore };