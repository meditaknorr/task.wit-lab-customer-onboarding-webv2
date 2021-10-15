import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { storeGetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { Main, ConfirmationScreen } from './Style';

const Confirmation = () => {
  const { status } = useParams();
  const { app } = storeGetter();
  const history = useHistory();
  const { appString } = useLocale(app.language);

  const buttonHandler = () => {
    if (status === 'success') {
      history.push('/registration/status/loading');
    } else {
      history.push('/registration/details/additional');
    }
  };

  return (
    <WebView>
      <ConfirmationScreen>
        <Header
          ghostBlock={1}
          screenLabel={appString.translations.header.regConfirmation}
          languageButton={1}
          greyBack={1}
          language={app.language}
          progressBar={1}
        />
        <Main submissionStatus={(status === 'success')}>
          <div className="Confirmation__Pane">
            <div className="Confirmation__Pane-Icon" />
            <div className="Confirmation__Pane-HeadingText">
              <h1>
                {
                  status === 'success'
                    ? appString.translations.confirmation.successHeader
                    : appString.translations.confirmation.errorHeader
                }
              </h1>
              <h2>
                {
                  status === 'success'
                    ? appString.translations.confirmation.successText
                    : appString.translations.confirmation.errorText
                }
              </h2>
            </div>
          </div>
          <div className="ActionButton">
            <button
              type="button"
              onClick={buttonHandler}
            >
              {
                status === 'success'
                  ? appString.translations.confirmation.seeStatus
                  : appString.translations.confirmation.tryAgain
              }
            </button>
          </div>
        </Main>
      </ConfirmationScreen>
    </WebView>
  );
};

export default Confirmation;
