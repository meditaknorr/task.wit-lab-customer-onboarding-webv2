import React, {createContext, useState, useEffect} from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [phone, setPhone] = useState(0);

  return (
    <AppContext.Provider value={phone}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
