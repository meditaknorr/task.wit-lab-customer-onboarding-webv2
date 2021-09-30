import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { StateContext } from '../../../Contexts/AppStoreContexts';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberConfirmationScreen, Main, Modal } from './Style';

const PhoneNumberConfirmation = () => {
  const state = useContext(StateContext);
  const [pinCounter, setPinCounter] = useState(0);
  const [confirmationPin, setConfirmationPin] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });
  const [pin, setPin] = useState(0);
  const language = (state.filter((data) => data.id === 1))[0];
  const userData = (state.filter((data) => data.id === 3))[0];

  const confirmationPinChecker = (e) => {
    if ((e.target.value).length > 0) {
      setConfirmationPin({
        ...confirmationPin,
        [`${e.target.id}`]: e.target.value,
      });
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
      setPinCounter(pinCounter + 1);
    } else if ((e.target.value) === '') {
      setConfirmationPin({
        ...confirmationPin,
        [`${e.target.id}`]: '',
      });
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        setPinCounter(0);
      }
    }
    setPin(`${confirmationPin.one}${confirmationPin.two}${confirmationPin.three}${confirmationPin.four}`);
    console.log(pin);
  };

  const clickCounter = () => {
    setPinCounter(pinCounter + 0);
  };

  const actionButtonHandler = () => {
    // eslint-disable-next-line max-len
    // const thePin = `${confirmationPin.one}${confirmationPin.two}${confirmationPin.three}${confirmationPin.four}`;
  };

  const closeModal = () => {
    // eslint-disable-next-line max-len
    // const thePin = `${confirmationPin.one}${confirmationPin.two}${confirmationPin.three}${confirmationPin.four}`;
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
        <Modal>
          <div className="Modal__Pane">
            <div className="Modal__Pane-CloseButton" onClick={closeModal} />
            <div className="Modal__Pane-Icon" />
            <div className="Modal__Pane-Information">
              <h1>Photo or code are incorrect</h1>
              <h2>Please try again to insert another number or code.</h2>
            </div>
          </div>
        </Modal>
        <Main>
          <div className="HeadingText">
            <h1>Confirm your phone number</h1>
            <h2>
              We’ve just sent a verification code to
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
              onKeyDown={clickCounter}
              onBlur={confirmationPinChecker}
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
              onKeyDown={clickCounter}
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
              onKeyDown={clickCounter}
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
              onBlur={confirmationPinChecker}
              onKeyDown={clickCounter}
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
              autoComplete="off"
            />
          </div>

          <div className="ActionButton">
            <div className="ActionButton-ResendPin">
              {(pinCounter >= 6) ? 'Resend code' : null}
            </div>
            <Button
              type="button"
              onClick={actionButtonHandler}
              className="ActionButton-ContinueRegistration"
              disabled={(pinCounter >= 4) ? null : true}
            >
              Continue
            </Button>
          </div>
        </Main>
      </PhoneNumberConfirmationScreen>
    </WebView>
  );
};

export default PhoneNumberConfirmation;
