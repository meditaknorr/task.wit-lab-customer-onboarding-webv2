import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { Main, DetailsScreen } from './Style';
import {
  inputAddressValidator,
  inputNumberValidator,
  inputStatus,
  inputTextValidator,
} from '../../../Helpers/inputFormHelper';

const Details = () => {
  const { app } = storeGetter();
  const dispatch = storeSetter();
  const history = useHistory();
  const { appString } = useLocale(app.language);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputField, setInputField] = useState({
    address: '',
    number: '',
    postCode: '',
    town: '',
    district: '',
  });
  // InputBox gets object's [keys], and from [keys] we generate input fields with .map().
  const InputBox = Object.keys(inputField);
  const [inputError, setInputError] = useState({
    address: undefined,
    number: undefined,
    postCode: undefined,
    town: undefined,
    district: undefined,
  });

  const buttonHandler = () => {
    dispatch(
      {
        type: 'SET_USER_PERSONALDETAILS',
        payload: {
          address: inputField.address,
          number: inputField.number,
          postCode: inputField.postCode,
          town: inputField.town,
          district: inputField.district,
        },
      },
    );
    history.push('/flow-switch');
  };

  // Input Handlers
  const inputClickHandler = (e) => {
    e.target.focus();
    e.target.scrollIntoView();
  };

  const inputChangeHandler = (e) => {
    setInputField({
      ...inputField,
      [e.target.id]: e.target.value,
    });
  };

  const inputErrorHandler = (e) => {
    const errorSetter = (id, value = undefined) => {
      setInputError({
        ...inputError,
        [id]: value,
      });
    };

    if (!inputStatus(e.target.value) && e.target.id !== 'number' && e.target.id !== 'postCode') {
      errorSetter(e.target.id, '* required.');
    } else {
      switch (e.target.id) {
        case 'address':
          if (!inputAddressValidator(e.target.value)) {
            errorSetter(e.target.id, '* invalid.');
          } else {
            errorSetter(e.target.id);
          }
          break;
        case 'number':
          if (!inputNumberValidator(e.target.value)) {
            errorSetter(e.target.id, '* invalid.');
          } else {
            errorSetter(e.target.id);
          }
          break;
        case 'postCode':
          if (!inputNumberValidator(e.target.value)) {
            errorSetter(e.target.id, '* invalid.');
          } else {
            errorSetter(e.target.id);
          }
          break;
        default:
          if (!inputTextValidator(e.target.value)) {
            errorSetter(e.target.id, '* invalid.');
          } else {
            errorSetter(e.target.id);
          }
      }
    }
  };

  const isSuccessfulValidated = () => {
    if (inputAddressValidator(inputField.address)
      // && inputNumberValidator(inputField.number)
      // && inputNumberValidator(inputField.postCode)
      && inputTextValidator(inputField.town)
      && inputTextValidator(inputField.district)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isSuccessfulValidated() && Object.values(inputField).indexOf('') <= -1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputField]);

  return (
    <WebView>
      <DetailsScreen>
        <Header
          backButton={1}
          screenLabel={appString.translations.header.regAdditionalInformation}
          greyBack={1}
          languageButton={1}
          language={app.language}
          progressBar={1}
        />
        <Main
          errorOnAddress={inputError.address}
          errorOnNumber={inputError.number}
          errorOnPostCode={inputError.postCode}
          errorOnTown={inputError.town}
          errorOnDistrict={inputError.district}
        >
          <div className="HeadingText">
            <h1>{appString.translations.additionalinformation.addLastDetails}</h1>
            <h2>{appString.translations.additionalinformation.provideMoreDetails}</h2>
          </div>

          <div className="AdditionalInformation">
            <h3 className="AdditionalInformation__Label">
              {appString.translations.additionalinformation.addressInformation}
            </h3>
            {
              InputBox.map((data) => (
                <div key={data} className={`InputBox ${data}`}>
                  <input
                    id={data}
                    name={data}
                    type="text"
                    size={20}
                    minLength={0}
                    maxLength={20}
                    onChange={inputChangeHandler}
                    onBlur={inputErrorHandler}
                    onClick={inputClickHandler}
                    value={inputField[data]}
                    placeholder={appString.translations.additionalinformation[data]}
                  />
                  <label className={data} htmlFor={data}>
                    {appString.translations.additionalinformation[data]}
                  </label>
                  <div className="InputBox__Error">{inputError[data]}</div>
                </div>
              ))
            }
          </div>

          <div className="ActionButton">
            <Button
              type="button"
              onClick={buttonHandler}
              disabled={isDisabled}
            >
              {appString.translations.onboarding.continue}
            </Button>
          </div>
        </Main>
      </DetailsScreen>
    </WebView>
  );
};

export default Details;
