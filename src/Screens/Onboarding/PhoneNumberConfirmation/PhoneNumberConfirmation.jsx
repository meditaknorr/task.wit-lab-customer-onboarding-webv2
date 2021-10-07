import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../Hooks/useLocale';
import { storeGetter } from '../../../Hooks/useStore';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberConfirmationScreen, Main, Modal } from './Style';

const PhoneNumberConfirmation = () => {
  const buttonRef = useRef();
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

  const handleInput = (e) => {
    setConfirmationPin((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const pinChecker = (e) => {
    if ((e.target.value).length > 0) {
      handleInput(e);
      e.target.focus();
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
        e.target.nextSibling.select();
      }
    } else if ((e.target.value) === '') {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        e.target.previousSibling.select();
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

  const continueButton = () => {
    const thePin = (`${confirmationPin.one}${confirmationPin.two}${confirmationPin.three}${confirmationPin.four}`);
    setModal(thePin !== user.OTP);
    if (thePin === user.OTP) {
      setConfirmationPin({
        one: '',
        two: '',
        three: '',
        four: '',
      });
      history.push('/registration/validation/scan/front');
    }
  };

  const handleModal = () => {
    setModal(false);
    setConfirmationPin({
      one: '',
      two: '',
      three: '',
      four: '',
    });
  };

  /**
   * Enter Key Listener
   * If input is valid and user presses ENTER,
   * It calls the same function created for our screen action button
   * @param e
   */
  const keyListener = (e) => {
    if (!isInValidPin) {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        continueButton();
      }
    } else if (e.code === 'Delete' || e.code === 'Backspace') {
      e.preventDefault();
      setConfirmationPin((prevState) => ({
        ...prevState,
        [e.target.id]: '',
      }));
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        e.target.previousSibling.select();
      }
    }
  };

  useEffect(() => {
    setIsInValidPin(!(Object.values(confirmationPin).indexOf('') <= -1));
  }, [confirmationPin]);

  useEffect(() => {
    document.addEventListener('keydown', keyListener);
    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, [isInValidPin]);

  return (
    <WebView>
      <PhoneNumberConfirmationScreen>
        <Header
          greyBack={1}
          backButton={1}
          screenLabel={appString.translations.header.regPhoneNumber}
          languageButton={1}
          progressBar={1}
          language={app.language}
        />
        <Modal status={modal}>
          <div className="Modal__Pane">
            <div className="Modal__Pane-Card" />
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label,jsx-a11y/interactive-supports-focus */}
            <div className="Modal__Pane-CloseButton" role="button" onClick={handleModal} />
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
              {' '}
              {(user.phoneCallingCode || app.defaultCountryCallingCode)}
              {' '}
              {user.phone}
            </h2>
          </div>

          <div className="OneTimePin">
            <input
              id="one"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              value={confirmationPin.one}
              onChange={pinChecker}
              onFocus={(e) => e.target.select()}
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
              onChange={pinChecker}
              onFocus={(e) => e.target.select()}
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
              onChange={pinChecker}
              onFocus={(e) => e.target.select()}
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
              onChange={pinChecker}
              onFocus={(e) => e.target.select()}
              className="OneTimePin__SquarePin"
              autoComplete="off"
            />
          </div>

          <div className="ActionButton">
            <div className="ActionButton-ResendPin">
              {(isInValidPin) ? null : appString.translations.onboarding.resendCode }
            </div>
            <button
              type="button"
              onClick={continueButton}
              className="ActionButton-ContinueRegistration"
              ref={buttonRef}
              disabled={(isInValidPin)}
            >
              {appString.translations.onboarding.continue}
            </button>
          </div>
        </Main>
      </PhoneNumberConfirmationScreen>
    </WebView>
  );
};

export default PhoneNumberConfirmation;
