import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import { OnboardingScreen, Main } from './Style';
import WebView from '../../Layouts/WebView/WebView';
import Header from '../../Components/Header/Header';

const Onboarding = () => {
  const dispatch = storeSetter();
  const { app } = storeGetter();
  const history = useHistory();
  const { appString } = useLocale(app.language);

  useEffect(() => {
    dispatch({
      type: 'RESET_STATE', // Clean any data stored
    });
  }, []);

  return (
    <WebView>
      <OnboardingScreen>
        <Header
          logo={1}
          languageButton={1}
          language={app.language}
          progressBar={1}
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

            <button
              type="button"
              className="ActionButton__StartRegistration"
              onClick={() => history.push('/registration/onboarding/phonenumber')}
            >
              {appString.translations.onboarding.buttonStart}
            </button>

            <button
              type="button"
              className="ActionButton__CheckStatus"
              onClick={() => history.push('/registration/onboarding/phonenumber/status')}
            >
              <span>{appString.translations.onboarding.alreadyRegstered}</span>
              <span>{appString.translations.onboarding.seeStatus}</span>
            </button>
          </div>

        </Main>
      </OnboardingScreen>
    </WebView>
  );
};

export default Onboarding;
