import {useContext} from 'react';
import AppContext from '../Store/AppStore';

const useStore = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new console.error(
      "[STORE:ERROR]: Something weny wrong."
    );
  }

  const {phone, setPhone} = context;
  return {phone, setPhone};
}

export default useStore;