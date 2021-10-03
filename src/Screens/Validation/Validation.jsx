import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../Hooks/useLocale';
import { storeGetter } from '../../Hooks/useStore';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { ValidationScreen, Main } from './Style';

const PhoneNumberConfirmation = () => {
  const history = useHistory();
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  const actionButtonHandler = () => {
    history.push('/registration/validation/scan/front');
  };

  return (
    <WebView>
      <ValidationScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={appString.translations.header.regScanSelfie}
          languageButton={1}
          language={app.language}
        />
        <Main>
          <div className="HeadingText">
            <h1>{appString.translations.validation.validationHeader}</h1>
            <h2>
              {appString.translations.validation.validationText}
            </h2>
          </div>

          <div className="ActionButton">
            <Button
              type="button"
              onClick={actionButtonHandler}
              className="ActionButton-ContinueRegistration"
            >
              {appString.translations.validation.continue}
            </Button>
          </div>
        </Main>
      </ValidationScreen>
    </WebView>
  );
};

export default PhoneNumberConfirmation;
