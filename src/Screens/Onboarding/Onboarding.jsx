import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { storeGetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import { OnborardingScreen, Main } from './Style';
import WebView from '../../Layouts/WebView/WebView';
import Header from '../../Components/Header/Header';

const Onboarding = () => {
  const { app } = storeGetter();
  const history = useHistory();
  const { appString } = useLocale(app.language);

  return (
    <WebView>
      <OnborardingScreen>
        <Header
          logo={1}
          backButton={0}
          screenLabel={0}
          languageButton={1}
          language={app.language}
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
