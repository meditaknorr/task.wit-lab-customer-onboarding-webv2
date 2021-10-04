import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import countryFlagHelper from '../../../Helpers/countryFlagHelper';
import { availableCountries, phoneNumberValidator, targetCountryHelper } from '../../../Helpers/targetCountryHelper';
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
  const [countryCallingCode, setCountryCallingCode] = useState('');

  useEffect(() => {
    if ((phoneNumber.length) === targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode))) {
      // eslint-disable-next-line max-len
      setValidPhone(phoneNumberValidator((phoneNumber), (user.countryCode || app.defaultCountryCode)));
    } else {
      setValidPhone(false);
    }

    if ((phoneNumber.length) === 0) {
      dispatch(
        {
          type: 'SET_USER',
          payload: {
            phoneCallingCode: countryCallingCode,
            countryCode: (parseInt((countryCallingCode.slice(1)), 10)),
          },
        },
      );
    }
  }, [phoneNumber, countryCallingCode]);

  const countryCodeSetter = (e) => {
    setCountryCallingCode(e.target.value);
    setPhoneNumber('');
    setValidPhone(false);
  };

  const phonenumberChecker = (e) => {
    setPhoneNumber(e.target.value);
    if ((phoneNumber.length) === targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode))) {
      // eslint-disable-next-line max-len
      setValidPhone(phoneNumberValidator((phoneNumber), (user.countryCode || app.defaultCountryCode)));
    } else {
      setValidPhone(false);
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

  const errorSignalizer = () => (phoneNumber.length >= targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode)) && !validPhone);

  return (
    <WebView>
      <PhoneNumberScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={appString.translations.header.regPhoneNumber}
          languageButton={1}
          language={app.language}
        />
        <Main checkSignal={validPhone} phoneLength={(phoneNumber.length)} nnumberLenght={targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode))}>
          <div className="HeadingText">
            <h1>{appString.translations.onboarding.enterPhone}</h1>
            <h2>{appString.translations.onboarding.forAccountSettup}</h2>
          </div>

          <div className="PhoneNumber">
            <div className="PhoneNumber__CountryCodeField">
              <div className="PhoneNumber__CountryCodeField-IconFlag">
                <img src={countryFlagHelper(targetCountryHelper('code', (user.countryCode || app.defaultCountryCode)))} alt="img" />
              </div>
              <select
                name="CountryCode"
                id="CountryCode"
                className="PhoneNumber__CountryCodeField-SelectBox"
                onChange={countryCodeSetter}
              >
                {
                  availableCountries.map((data) => (
                    <option key={data.id} value={data.diallingCode}>
                      {data.diallingCode}
                    </option>
                  ))
                }
              </select>
              <label htmlFor="CountryCode" className="PhoneNumber__CountryCodeField-Label">{appString.translations.onboarding.code}</label>
            </div>
            <div className="PhoneNumber__NumberField">
              <input
                type="tel"
                id="phoneNumber"
                minLength={targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode))}
                maxLength={targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode))}
                size={targetCountryHelper('nationalNumberLength', (user.countryCode || app.defaultCountryCode))}
                placeholder={targetCountryHelper('dummyNumber', (user.countryCode || app.defaultCountryCode))}
                className="PhoneNumber__NumberField-Input"
                value={user.phone}
                onChange={phonenumberChecker}
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
                errorSignalizer() && `${appString.translations.onboarding.validNumber}`
              }
            </div>
          </div>

          <div className="ActionButton">
            <Button
              type="button"
              onClick={continueButton}
              className="ActionButton-ContinueRegistration"
              disabled={(validPhone) ? null : true}
            >
              {appString.translations.onboarding.continue}
            </Button>
          </div>
        </Main>
      </PhoneNumberScreen>
    </WebView>
  );
};

export default PhoneNumber;
