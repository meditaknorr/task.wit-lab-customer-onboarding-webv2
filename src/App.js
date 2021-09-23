import React from 'react';
import Store from './Store/Store';
import './Styles/global.scss';
import AppRouter from './Routes/AppRouter';

/**
 * Recebe recebe quem deve ler os dados da store: Component. Mid-Level-Component
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <>
      <Store>
        <AppRouter />
      </Store>
    </>
  );
}

export default App;
