import React from 'react';
import { useParams } from 'react-router-dom';
import { storeGetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { Main, StatusScreen } from './Style';

const Status = () => {
  const { status } = useParams();
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  const statusSwitcher = (params) => {
    switch (params) {
      case 'error':
        return (
          <>
            <div className="Status__Pane-Icon Error" />
            <div className="Status__Pane-HeadingText">
              <h1>{appString.translations.status.errorStatusHeading}</h1>
              <h2>{appString.translations.status.errorStatusText}</h2>
            </div>
          </>
        );
      case 'success':
        return (
          <>
            <div className="Status__Pane-Icon Success" />
            <div className="Status__Pane-HeadingText">
              <h1>{appString.translations.status.successStatusHeading}</h1>
              <h2>{appString.translations.status.successStatusText}</h2>
            </div>
          </>
        );
      default:
        break;
    }
    return false;
  };

  return (
    <WebView>
      <StatusScreen>
        <Header
          ghostBlock={1}
          screenLabel={appString.translations.header.regStatus}
          languageButton={1}
          language={app.language}
        />
        <Main>
          <div className="Status__Pane">
            {statusSwitcher(status)}
          </div>

          <div className="ActionButton">
            <button type="button">{appString.translations.status.tryAgain}</button>
          </div>
        </Main>
      </StatusScreen>
    </WebView>
  );
};

export default Status;
