import React from 'react';
import Store from './Store/Store';
import './Styles/global.scss';
import AppRouter from './Routes/AppRouter';

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
