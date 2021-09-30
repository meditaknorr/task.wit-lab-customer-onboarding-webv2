import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { StateContext } from '../../../Contexts/AppStoreContexts';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberConfirmationScreen, Main, Modal } from './Style';
import { useLocale } from '../../../Hooks/useLocale';

const PhoneNumberConfirmation = () => {
  const state = useContext(StateContext);
  const language = (state.filter((data) => data.id === 1))[0];
  const userData = (state.filter((data) => data.id === 3))[0];
  const { appString } = useLocale(language.language);
  const [isValidPin, setIsValidPin] = useState(false);
  const [modal, setModal] = useState(false);
  const [confirmationPin, setConfirmationPin] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  useEffect(() => {
    setIsValidPin(!(Object.values(confirmationPin).indexOf('') <= -1));
  }, [confirmationPin]);

  const handle = (e) => {
    setConfirmationPin((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const confirmationPinChecker = (e) => {
    if ((e.target.value).length > 0) {
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
      handle(e);
    } else if ((e.target.value) === '') {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        setConfirmationPin((prevState) => ({
          ...prevState,
          [e.target.id]: '',
        }));
      } else {
        setConfirmationPin((prevState) => ({
          ...prevState,
          [e.target.id]: '',
        }));
      }
    }
  };

  const actionButtonHandler = () => {
    const thePin = (`${confirmationPin.one}${confirmationPin.two}${confirmationPin.three}${confirmationPin.four}`);
    setModal(thePin !== '1010');
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <WebView>
      <PhoneNumberConfirmationScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={1}
          languageButton={1}
          language={language.language}
        />
        <Modal status={modal}>
          <div className="Modal__Pane">
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label,jsx-a11y/interactive-supports-focus */}
            <div className="Modal__Pane-CloseButton" role="button" onClick={closeModal} />
            <div className="Modal__Pane-Icon" />
            <div className="Modal__Pane-Information">
              <h1>{appString.translations.onboarding.codeIncorrect}</h1>
              <h2>{appString.translations.onboarding.tryAgainCode}</h2>
            </div>
          </div>
        </Modal>
        <Main>
          <div className="HeadingText">
            <h1>{appString.translations.onboarding.pleaseConfirm}</h1>
            <h2>
              {appString.translations.onboarding.verificationSentTo}
              <span>
                {userData.callingCode}
              </span>
              {userData.userPhoneNumber}
              .
            </h2>
          </div>

          <div className="OneTimePin">
            <input
              id="one"
              type="tel"
              minLength={1}
              maxLength={1}
              size={3}
              value={confirmationPin.one}
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
              autoComplete="off"
            />
            <input
              id="two"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              value={confirmationPin.two}
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
              autoComplete="off"
            />
            <input
              id="three"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              value={confirmationPin.three}
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
              autoComplete="off"
            />
            <input
              id="four"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              value={confirmationPin.four}
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
              autoComplete="off"
            />
          </div>

          <div className="ActionButton">
            <div className="ActionButton-ResendPin">
              {(isValidPin) ? null : appString.translations.onboarding.resendCode }
            </div>
            <Button
              type="button"
              onClick={actionButtonHandler}
              className="ActionButton-ContinueRegistration"
              disabled={(isValidPin)}
            >
              {appString.translations.onboarding.continue}
            </Button>
          </div>
        </Main>
      </PhoneNumberConfirmationScreen>
    </WebView>
  );
};

export default PhoneNumberConfirmation;
