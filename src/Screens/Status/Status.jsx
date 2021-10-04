import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { storeGetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { Main, RegistrationStatusScreen } from './Style';

const Status = () => {
  const history = useHistory();
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  return (
    <WebView>
      <RegistrationStatusScreen>
        <Header
          logo={1}
          backButton={0}
          screenLabel={appString.translations.header.regStatus}
          languageButton={1}
          language={app.language}
        />
        <Main>
          <div className="RegistrationStatus__Pane">
            <div className="RegistrationStatus__Pane-Icon" />
            <div className="RegistrationStatus__Pane-HeadingText">
              {/* eslint-disable-next-line max-len */}
              <h1>{appString.translations.status.loadingStatusHeading}</h1>
              {/* eslint-disable-next-line max-len */}
              <h2>{appString.translations.status.loadingStatusText}</h2>
            </div>
          </div>
          <div className="ActionButton">
            <Button
              type="button"
              onClick={() => history.push('/registration/onboarding')}
            >
              {/* eslint-disable-next-line max-len */}
              {appString.translations.status.ok}
            </Button>
          </div>
        </Main>
      </RegistrationStatusScreen>
    </WebView>
  );
};

export default Status;
