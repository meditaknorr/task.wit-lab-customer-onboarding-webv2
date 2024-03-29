import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { storeGetter } from '../../../Hooks/useStore';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberConfirmationScreen, Main, Modal } from './Style';
import { useLocale } from '../../../Hooks/useLocale';

const PhoneNumberConfirmation = () => {
  const inputRef = useRef([]);
  const history = useHistory();
  const { app, user } = storeGetter();
  const { appString } = useLocale(app.language);
  const [modal, setModal] = useState(false);
  const [pin, setPIN] = useState([undefined, undefined, undefined, undefined]);
  let items;

  const closeModal = () => {
    setModal(false);
    setPIN([undefined, undefined, undefined, undefined]);
  };

  const isComplete = (data) => {
    const ObjEmpty = Object.keys(data).filter((k) => (data[k] === '' || data[k] === undefined || data[k] === null));
    if (ObjEmpty.length === 0) {
      return true;
    }
    return false;
  };

  const inputHandler = (e) => {
    const index = (e.target.id).slice(5);
    items = pin;
    items[index] = e.target.value;
    if (isComplete(items)) {
      setPIN([...items]);
    }
  };

  const focusHandler = (e) => {
    const index = parseInt((e.target.id).slice(5), 10);
    if ((e.target.value).length > 0) {
      if (index < 3) {
        inputHandler(e);
        inputRef.current[index].nextSibling.focus();
        inputRef.current[index].nextSibling.select();
      } else if (index < 4) {
        inputRef.current[3].blur();
      }
    } else if (index >= 0) {
      items = pin;
      items[index] = undefined;
      setPIN([...items]);
    }
  };

  const buttonHandler = () => {
    const thePIN = pin.join('');
    setModal(thePIN !== user.OTP);
    if (thePIN === user.OTP) {
      history.push('/registration/validation/scan/front');
    }
  };

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
              {' '}
              {(user.phoneCallingCode || app.defaultCountryCallingCode)}
              {' '}
              {user.phone}
            </h2>
          </div>

          <div className="OneTimePin">
            {
              pin.map((square, index) => (
                <input
                  key={uuidv4()}
                  id={`box__${index}`}
                  type="tel"
                  minLength={1}
                  maxLength={1}
                  size={1}
                  tabIndex={0}
                  value={pin[index]}
                  onChange={focusHandler}
                  onBlur={inputHandler}
                  ref={(element) => { inputRef.current[index] = element; }}
                  className="OneTimePin__Square"
                  autoComplete="off"
                />
              ))
            }
          </div>

          <div className="ActionButton">
            <div className="ActionButton__ResendPin">
              {isComplete(pin) && appString.translations.onboarding.resendCode }
            </div>
            <button
              type="button"
              tabIndex={0}
              onClick={buttonHandler}
              className="ActionButton__ContinueRegistration"
              disabled={!isComplete(pin)}
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
