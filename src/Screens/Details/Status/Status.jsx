import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { storeGetter } from '../../../../../unpatched - advanced/src/Hooks/useStore';
import { useLocale } from '../../../../../unpatched - advanced/src/Hooks/useLocale';
import Header from '../../../../../unpatched - advanced/src/Components/Header/Header';
import WebView from '../../../../../unpatched - advanced/src/Layouts/WebView/WebView';
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
      default:
      case '/registration/details/confirmation/unsuccessful/':
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
      <ConfirmationScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={appString.translations.header.regConfirmation}
          languageButton={1}
          language={app.language}
        />
        <Main submissionStatus={isSubmitted}>
          <div className="Confirmation__Pane">
            <div className="Confirmation__Pane-Icon" />
            <div className="Confirmation__Pane-HeadingText">
              {/* eslint-disable-next-line max-len */}
              <h1>{isSubmitted ? appString.translations.confirmation.successHeader : appString.translations.confirmation.errorHeader}</h1>
              {/* eslint-disable-next-line max-len */}
              <h2>{isSubmitted ? appString.translations.confirmation.successText : appString.translations.confirmation.errorText}</h2>
            </div>
          </div>
          <div className="ActionButton">
            <Button
              type="button"
            >
              {/* eslint-disable-next-line max-len */}
              {isSubmitted ? appString.translations.confirmation.seeStatus : appString.translations.confirmation.tryAgain}
            </Button>
          </div>
        </Main>
      </ConfirmationScreen>
    </WebView>
  );
};

export default Details;
