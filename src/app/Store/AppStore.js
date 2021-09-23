import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('');
  const [phone, setPhone] = useState(0);

  return (
    <AppContext.Provider value={{
      phone, setPhone, language, setLanguage,
    }}
    >
      {children }
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppContextProvider;
export { AppContext };
