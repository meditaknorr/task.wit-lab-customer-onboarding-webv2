import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { storeGetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { Main, ConfirmationScreen } from './Style';

const Details = () => {
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function confirmationStatusHandler(pathname) {
    switch (pathname) {
      case '/registration/details/confirmation/successful/':
        setIsSubmitted(true);
        break;
      case '/registration/details/confirmation/unsuccessful/':
        setIsSubmitted(false);
        break;
      default:
        setIsSubmitted(false);
        break;
    }
  }

  useEffect(() => {
    if (location.pathname) {
      confirmationStatusHandler(location.pathname);
    }
  }, []);

  return (
    <WebView>
      <ConfirmationScreen submissionStatus={isSubmitted}>
        <Header
          logo={0}
          backButton={1}
          screenLabel={appString.translations.header.regConfirmation}
          languageButton={1}
          language={app.language}
        />
        <Main>
          <div className="Confirmation__Pane">
            <div className="Confirmation__Pane-Icon" />
            <div className="Confirmation__Pane-HeadingText">
              <h1>Your registration is submitted</h1>
              {/* eslint-disable-next-line max-len */}
              <h2>We are validating your identity. In 48h you will receive an SMS to confirm your account creation.</h2>
            </div>
          </div>
          <div className="ActionButton">
            <Button
              type="button"
            >
              {appString.translations.onboarding.continue}
            </Button>
          </div>
        </Main>
      </ConfirmationScreen>
    </WebView>
  );
};

export default Details;
