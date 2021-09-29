import React, { useContext } from 'react';
import { StateContext } from '../../../Contexts/AppStoreContexts';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberScreen, Main } from './Style';

const PhoneNumberConfirmation = () => {
  const state = useContext(StateContext);
  const language = (state.filter((data) => data.id === 1))[0];

  return (
    <WebView>
      <PhoneNumberScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={1}
          languageButton={1}
          language={language.language}
        />
        <Main>
          OTP
        </Main>
      </PhoneNumberScreen>
    </WebView>
  );
};

export default PhoneNumberConfirmation;
