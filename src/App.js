import React from 'react';
import StoreProvider from './Store/StoreProvider';
import './Styles/global.scss';
import AppRouter from './Routes/AppRouter';

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
