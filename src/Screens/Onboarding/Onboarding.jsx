import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { StateContext, DispatchContext } from '../../Contexts/AppStoreContexts';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { OnborardingScreen, Main } from './Style';
import { useLocale } from '../../Hooks/useLocale';

const Onboarding = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const language = (state.filter((data) => data.id === 1));
  const { appString } = useLocale(language[0].language);

  const languageSetter = (selectedLanguage) => {
    dispatch(
      {
        type: 'CHANGE_APP_LANGUAGE',
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
        <Main>
          <div className="HeadingText">
            <h1>{appString[0].translations.onboarding.createYour}</h1>
            <h1>{appString[0].translations.onboarding.witAccount}</h1>
          </div>
          <h2>{appString[0].translations.onboarding.toOpen}</h2>
          <div className="Registration">
            <div className="Registration-Step">
              <div className="Registration-Step__Icon" />
              <p>{appString[0].translations.onboarding.validatePhone}</p>
            </div>
            <div className="Registration-Step">
              <div className="Registration-Step__Icon" />
              <p>{appString[0].translations.onboarding.scanDocument}</p>
            </div>
            <div className="Registration-Step">
              <div className="Registration-Step__Icon" />
              <p>{appString[0].translations.onboarding.takeSelfie}</p>
            </div>
          </div>
          <div className="ActionButton">
            <Button type="button" className="ActionButton-StartRegistration">
              {appString[0].translations.onboarding.buttonStart}
            </Button>
            <div className="ActionButton-CheckStatus">
              <p>{appString[0].translations.onboarding.alreadyRegstered}</p>
              <p>{appString[0].translations.onboarding.seeStatus}</p>
            </div>
          </div>
        </Main>
      </OnborardingScreen>
    </WebView>
  );
};

export default Onboarding;
