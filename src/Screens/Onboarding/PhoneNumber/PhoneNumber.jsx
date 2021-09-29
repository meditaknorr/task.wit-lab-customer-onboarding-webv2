import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { StateContext, DispatchContext } from '../../../Contexts/AppStoreContexts';
import { availableCountries, phoneNumberValidator, targetCountryHelper } from '../../../Helpers/targetCountryHelper';
import countryFlagHelper from '../../../Helpers/countryFlagHelper';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { useLocale } from '../../../Hooks/useLocale';
import { PhoneNumberScreen, Main } from './Style';

const PhoneNumber = () => {
  const history = useHistory();
  const [validPhone, setValidPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const language = (state.filter((data) => data.id === 1))[0];
  const { appString } = useLocale(language.language);
  const { countryCode } = (state.filter((data) => data.id === 2))[0];

  const languageSetter = (selectedLanguage) => {
    dispatch(
      {
        type: 'CHANGE_APP_LANGUAGE',
        payload: {
          language: selectedLanguage,
          id: 1,
        },
      },
    );
  };
  const countryCodeSetter = (e) => {
    const CountryCodeNumber = (parseInt(((e.target.value).slice(1)), 10));
    dispatch(
      {
        type: 'CHANGE_APP_COUNTRY',
        payload: {
          countryName: targetCountryHelper('CountryName', CountryCodeNumber),
          countryCode: CountryCodeNumber,
          id: 2,
        },
      },
    );
  };
  const phonenumberChecker = (e) => {
    setPhoneNumber(e.target.value);
    if ((e.target.value.length) === targetCountryHelper('nationalNumberLength', countryCode)) {
      setValidPhone(phoneNumberValidator((e.target.value), countryCode));
    } else {
      setValidPhone(false);
    }
  };

  return (
    <WebView>
      <PhoneNumberScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={1}
          languageButton={1}
          language={language.language}
          languageSetter={languageSetter}
        />
        <Main>
          <div className="HeadingText">
            <h1>{appString.translations.onboarding.enterPhone}</h1>
            <h2>{appString.translations.onboarding.forAccountSettup}</h2>
          </div>

          <div className="PhoneNumber">
            <div className="PhoneNumber__CountryCodeField">
              <div className="PhoneNumber__CountryCodeField-IconFlag">
                <img src={countryFlagHelper(targetCountryHelper('code', countryCode))} alt="img" />
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
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="CountryCode" className="PhoneNumber__CountryCodeField-Label">{appString.translations.onboarding.code}</label>
            </div>

            <div className="PhoneNumber__NumberField">
              <input
                type="tel"
                id="phoneNumber"
                minLength={targetCountryHelper('nationalNumberLength', countryCode)}
                maxLength={targetCountryHelper('nationalNumberLength', countryCode)}
                size={targetCountryHelper('nationalNumberLength', countryCode)}
                placeholder={targetCountryHelper('dummyNumber', countryCode)}
                className="PhoneNumber__NumberField-Input"
                value={phoneNumber}
                onChange={phonenumberChecker}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="phoneNumber" className="PhoneNumber__NumberField-Label">{appString.translations.onboarding.mobilePhone}</label>
              <div className="PhoneNumber__NumberField-Status" />
            </div>

            <div className="PhoneNumber__ErrorText">
              {
                (phoneNumber.length >= targetCountryHelper('nationalNumberLength', countryCode) && !validPhone) && `${appString.translations.onboarding.validNumber}`
              }
            </div>
          </div>
          <div className="ActionButton">
            <Button
              type="button"
              onClick={() => history.push('/registration/onboarding/phonenumber/otp')}
              className="ActionButton-StartRegistration"
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
