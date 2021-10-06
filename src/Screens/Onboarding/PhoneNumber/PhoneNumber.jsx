import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import countryFlagHelper from '../../../Helpers/countryFlagHelper';
import { availableCountries, targetCountryHelper, phoneNumberValidator } from '../../../Helpers/targetCountryHelper';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { PhoneNumberScreen, Main } from './Style';

const PhoneNumber = () => {
  const dispatch = storeSetter();
  const { app, user } = storeGetter();
  const history = useHistory();
  const { appString } = useLocale(app.language);
  const [validPhone, setValidPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+258');
  const NationalNumberLength = targetCountryHelper('nationalNumberLength', parseInt((countryCode.slice(1)), 10));
  const CountryCode = targetCountryHelper('code', parseInt((countryCode.slice(1)), 10));
  const PlaceHolder = targetCountryHelper('dummyNumber', parseInt((countryCode.slice(1)), 10));

  const inputHandler = (e) => {
    if (e.target.id === 'CountryCode') {
      setPhoneNumber('');
      setCountryCode(e.target.value);
    } else {
      setPhoneNumber(e.target.value);
    }
  };

  const continueButton = () => {
    dispatch(
      {
        type: 'SET_USER',
        payload: {
          countryName: targetCountryHelper('CountryName', (user.countryCode || app.defaultCountryCode)),
          phone: phoneNumber,
        },
      },
    );
    setPhoneNumber('');
    history.push('/registration/onboarding/phonenumber/confirmation');
  };

  /**
   * Enter Key Listener
   * If input is valid and user presses ENTER,
   * It calls the same function created for our screen action button
   * @param e
   */
  const keyListener = (e) => {
    if (validPhone) {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        continueButton();
      }
    }
  };

  useEffect(() => {
    if ((phoneNumber).length === NationalNumberLength) {
      setValidPhone(
        phoneNumberValidator((phoneNumber),
          parseInt((countryCode.slice(1)), 10)),
      );
    }
  }, [phoneNumber]);

  useEffect(() => {
    document.addEventListener('keydown', keyListener);
    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, [validPhone]);

  return (
    <WebView>
      <PhoneNumberScreen>

        <Header
          backButton={1}
          greyBack={1}
          screenLabel={appString.translations.header.regPhoneNumber}
          languageButton={1}
          progressBar={1}
          language={app.language}
        />

        <Main
          checkSignal={validPhone}
          phoneLength={(phoneNumber.length)}
          nationalNumberLength={NationalNumberLength}
        >
          <div className="HeadingText">
            <h1>{appString.translations.onboarding.enterPhone}</h1>
            <h2>{appString.translations.onboarding.forAccountSettup}</h2>
          </div>

          <div className="PhoneNumber">
            <div className="PhoneNumber__CountryCodeField">
              <div className="PhoneNumber__CountryCodeField-IconFlag">
                <img src={countryFlagHelper(CountryCode)} alt="img" />
              </div>
              <select
                defaultValue={countryCode}
                name="CountryCode"
                id="CountryCode"
                className="PhoneNumber__CountryCodeField-SelectBox"
                onChange={inputHandler}
              >
                {
                  availableCountries.map((data) => (
                    <option key={data.id} value={data.diallingCode}>
                      {data.diallingCode}
                    </option>
                  ))
                }
              </select>
              <label
                htmlFor="CountryCode"
                className="PhoneNumber__CountryCodeField-Label"
              >
                {appString.translations.onboarding.code}
              </label>
            </div>

            <div className="PhoneNumber__NumberField">
              <input
                type="tel"
                id="phoneNumber"
                minLength={NationalNumberLength}
                maxLength={NationalNumberLength}
                size={NationalNumberLength}
                placeholder={PlaceHolder}
                className="PhoneNumber__NumberField-Input"
                value={phoneNumber}
                onChange={inputHandler}
                autoComplete="off"
              />
              <label
                htmlFor="phoneNumber"
                className="PhoneNumber__NumberField-Label"
              >
                {appString.translations.onboarding.mobilePhone}
              </label>
              <div className="PhoneNumber__NumberField-Status" />
            </div>
            <div className="PhoneNumber__ErrorText">
              {
                phoneNumber.length >= NationalNumberLength
                && !validPhone
                && `${appString.translations.onboarding.validNumber}`
              }
            </div>
          </div>

          <div className="ActionButton">
            <button
              type="button"
              onClick={continueButton}
              className="ActionButton-ContinueRegistration"
              disabled={(!validPhone)}
            >
              {appString.translations.onboarding.continue}
            </button>
          </div>
        </Main>
      </PhoneNumberScreen>
    </WebView>
  );
};

export default PhoneNumber;
