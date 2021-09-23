import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../../Contexts/AppStoreContexts';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { OnborardingScreen } from './Style';

const Onboarding = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const language = (state.filter((data) => data.id === 1));

  const languageSetter = (selectedLanguage) => {
    dispatch(
      {
        type: 'REMOVE_STATE',
        payload: {
          id: 1,
        },
      },
    );
    dispatch(
      {
        type: 'ADD_STATE',
        payload: {
          language: selectedLanguage,
          id: 1,
        },
      },
    );
  };

  return (
    <WebView>
      <OnborardingScreen>
        <Header
          logo={1}
          backButton={0}
          screenLabel={0}
          languageButton={1}
          language={language[0].language}
          languageSetter={languageSetter}
        />
        {language[0].language}
      </OnborardingScreen>
    </WebView>
  );
};

export default Onboarding;
