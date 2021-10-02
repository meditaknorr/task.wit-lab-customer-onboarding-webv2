import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../Hooks/useLocale';
import { storeGetter } from '../../../Hooks/useStore';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberConfirmationScreen, Main, Modal } from './Style';

const PhoneNumberConfirmation = () => {
  const history = useHistory();
  const { app, user } = storeGetter();
  const { appString } = useLocale(app.language);
  const [isInValidPin, setIsInValidPin] = useState(true);
  const [modal, setModal] = useState(false);
  const [confirmationPin, setConfirmationPin] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  useEffect(() => {
    setIsInValidPin(!(Object.values(confirmationPin).indexOf('') <= -1));
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
    setModal(thePin !== user.OTP);
    if (thePin === user.OTP) {
      history.push('/registration/validation/scan/front');
    }
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
          screenLabel={appString.translations.header.regPhoneNumber}
          languageButton={1}
          language={app.language}
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
              <span>{(user.phoneCallingCode || app.defaultCountryCallingCode)}</span>
              {user.phone}
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
              {(isInValidPin) ? null : appString.translations.onboarding.resendCode }
            </div>
            <Button
              type="button"
              onClick={actionButtonHandler}
              className="ActionButton-ContinueRegistration"
              disabled={(isInValidPin)}
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
