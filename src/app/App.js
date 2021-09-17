import React from 'react';
import './Styles/global.scss';
import AppRouter from './Routes/AppRouter';
import AppStoreContainer from './Store/AppStoreContainer';
import AppContextProvider from './Store/AppStore';

/**
 * Recebe recebe quem deve ler os dados da store: Component. Mid-Level-Component
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <>
      <AppStoreContainer
        component={AppRouter}
        provider={AppContextProvider}
      />
    </>
  );
}

export default App;
