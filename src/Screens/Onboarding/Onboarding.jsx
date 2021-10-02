import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { StateContext } from '../../Contexts/AppStoreContexts';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { OnborardingScreen, Main } from './Style';
import { useLocale } from '../../Hooks/useLocale';

const Onboarding = () => {
  const history = useHistory();
  const state = useContext(StateContext);
  const language = (state.filter((data) => data.id === 1))[0];
  const { appString } = useLocale(language.language);

  return (
    <WebView>
      <OnborardingScreen>
        <Header
          logo={1}
          backButton={0}
          screenLabel={''}
          languageButton={1}
          language={language.language}
        />
        <Main>
          <div className="HeadingText">
            <h1>{appString.translations.onboarding.createYour}</h1>
            <h1>{appString.translations.onboarding.witAccount}</h1>
          </div>
          <h2>{appString.translations.onboarding.toOpen}</h2>
          <div className="Registration">
            <div className="Registration-Step">
              <div className="Registration-Step__Icon" />
              <p>{appString.translations.onboarding.validatePhone}</p>
            </div>
            <div className="Registration-Step">
              <div className="Registration-Step__Icon" />
              <p>{appString.translations.onboarding.scanDocument}</p>
            </div>
            <div className="Registration-Step">
              <div className="Registration-Step__Icon" />
              <p>{appString.translations.onboarding.takeSelfie}</p>
            </div>
          </div>
          <div className="ActionButton">
            <Button type="button" className="ActionButton-StartRegistration" onClick={() => history.push('/registration/onboarding/phonenumber')}>
              {appString.translations.onboarding.buttonStart}
            </Button>
            <div className="ActionButton-CheckStatus">
              <span>{appString.translations.onboarding.alreadyRegstered}</span>
              <span>{appString.translations.onboarding.seeStatus}</span>
            </div>
          </div>
        </Main>
      </OnborardingScreen>
    </WebView>
  );
};

export default Onboarding;
