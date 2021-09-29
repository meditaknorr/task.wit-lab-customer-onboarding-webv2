import React, { useContext, useState } from 'react';
import { StateContext } from '../../../Contexts/AppStoreContexts';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberConfirmationScreen, Main } from './Style';

const PhoneNumberConfirmation = () => {
  const [confirmationPin, setConfirmationPin] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });
  const [pin, setPin] = useState(0);
  const state = useContext(StateContext);
  const language = (state.filter((data) => data.id === 1))[0];

  const confirmationPinChecker = (e) => {
    if ((e.target.value).length > 0) {
      setConfirmationPin({
        ...confirmationPin,
        [`${e.target.id}`]: e.target.value,
      });
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    } else if ((e.target.value).length < 1) {
      setConfirmationPin({
        ...confirmationPin,
        [`${e.target.id}`]: '',
      });
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
    console.log(pin);
    console.log(confirmationPin);
    setPin(`${confirmationPin.one}${confirmationPin.two}${confirmationPin.three}${confirmationPin.four}`);
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
        <Main>
          <div className="HeadingText">
            <h1>Confirm your phone number</h1>
            <h2>We’ve just sent a verification code to +242 818 801 443.</h2>
          </div>
          <div className="OneTimePin">
            <input
              id="one"
              type="tel"
              minLength={1}
              maxLength={1}
              size={3}
              pattern="[0-9]+"
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
            />
            <input
              id="two"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              pattern="[0-9]+"
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
            />
            <input
              id="three"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              pattern="[0-9]+"
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
            />
            <input
              id="four"
              type="tel"
              minLength={1}
              maxLength={1}
              size={1}
              onChange={confirmationPinChecker}
              className="OneTimePin__SquarePin"
            />
          </div>

        </Main>
      </PhoneNumberConfirmationScreen>
    </WebView>
  );
};

export default PhoneNumberConfirmation;
