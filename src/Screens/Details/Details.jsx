import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import {
  inputStatus,
  inputDateValidator,
  inputTextValidator,
  inputVoterValidator,
} from '../../Helpers/inputFormHelper';
import { photo } from '../../Helpers/scanHelper';
import { DetailsScreen, Main, Modal } from './Style';

const Details = () => {
  const { app, user, media } = storeGetter();
  const dispatch = storeSetter();
  const history = useHistory();
  const { appString } = useLocale(app.language);
  const front = photo(media, 4);
  const back = photo(media, 5);
  const selfie = photo(media, 6);
  const [modal, setModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputField, setInputField] = useState({
    firstName: 'Agostinho',
    lastName: 'Raposo',
    birthDate: '04/04/1993',
    birthPlace: 'Beira',
    humanGender: 'Masculino',
    citizenNationality: 'Moçambicana',
    voterNumber: '000000/01',
  });
  // InputBox gets object's [keys], and from [keys] we generate input fields with .map().
  const InputBox = Object.keys(inputField);
  const [inputError, setInputError] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    humanGender: '',
    citizenNationality: '',
    voterNumber: '',
  });

  const closeModal = () => {
    setModal(false);
  };

  // Media Handlers
  const deleteMedia = () => {
    switch (selectedMedia) {
      case 4:
        dispatch({ type: 'REMOVE_MEDIA', payload: { id: 4 } });
        history.push('/registration/validation/scan/front');
        break;
      case 5:
        dispatch({ type: 'REMOVE_MEDIA', payload: { id: 5 } });
        history.push('/registration/validation/scan/back');
        break;
      case 6:
        dispatch({ type: 'REMOVE_MEDIA', payload: { id: 6 } });
        history.push('/registration/validation/selfie');
        break;
      default:
        break;
    }
  };

  const mediaHandler = (e) => {
    switch (e.target.id) {
      case 'Delete_Front':
        setSelectedMedia(4);
        setModal(true);
        break;
      case 'Delete_Back':
        setSelectedMedia(5);
        setModal(true);
        break;
      case 'Delete_Selfie':
        setSelectedMedia(6);
        setModal(true);
        break;
      default:
        console.log('--default--');
        break;
    }
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

    if (!inputStatus(e.target.value)) {
      errorSetter(e.target.id, '* is required.');
    } else {
      switch (e.target.id) {
        case 'birthDate':
          if (!inputDateValidator(e.target.value)) {
            errorSetter(e.target.id, '* is invalid.');
          } else {
            errorSetter(e.target.id);
          }
          break;
        case 'voterNumber':
          if (!inputVoterValidator(e.target.value)) {
            errorSetter(e.target.id, '* is invalid.');
          } else {
            errorSetter(e.target.id);
          }
          break;
        default:
          if (!inputTextValidator(e.target.value)) {
            errorSetter(e.target.id, '* is invalid.');
          } else {
            errorSetter(e.target.id);
          }
      }
    }
  };

  const isSuccessfulValidated = () => {
    if (inputTextValidator(inputField.firstName)
      && inputTextValidator(inputField.lastName)
      && inputDateValidator(inputField.birthDate)
      && inputTextValidator(inputField.birthPlace)
      && inputTextValidator(inputField.humanGender)
      && inputTextValidator(inputField.citizenNationality)
      && inputVoterValidator(inputField.voterNumber)) {
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
          greyBack={1}
          backButton={1}
          backButtonURL="/registration/onboarding/phonenumber"
          screenLabel={appString.translations.header.regGeneralInformation}
          languageButton={1}
          progressBar={1}
          language={app.language}
        />
        <Modal modalStatus={modal}>
          <div className="Modal__Pane">
            <div className="Modal__Pane-Information">
              <h1>
                {appString.translations.modal.deleteCardPhoto}
              </h1>
              <h2>
                {appString.translations.modal.deleteFrontPhotoConfirmation}
              </h2>
            </div>
            <div className="Modal__Pane-ActionButton">
              <button type="button" onClick={closeModal} className="Modal__Pane-ActionButton-Cancel">
                {appString.translations.modal.cancel}
              </button>
              <button type="button" id={selectedMedia} onClick={deleteMedia} className="Modal__Pane-ActionButton-Delete">
                {appString.translations.modal.delete}
              </button>
            </div>
          </div>
        </Modal>
        <Main
          errorOnFirstName={inputError.firstName}
          errorOnLastName={inputError.lastName}
          errorOnBirthDate={inputError.birthDate}
          errorOnBirthPlace={inputError.birthPlace}
          errorOnHumanGender={inputError.humanGender}
          errorOnCitizenNationality={inputError.citizenNationality}
          errorOnVoterNumber={inputError.voterNumber}
        >
          <div className="HeadingText">
            <h1>{appString.translations.generalInformation.reviewDetails}</h1>
            <h2>{appString.translations.generalInformation.reviewConfirmInformation}</h2>
          </div>

          <div className="PhoneDetails">
            <h3 className="PhoneDetails__Label">{appString.translations.generalInformation.phoneNumber}</h3>
            <h2 className="PhoneDetails__UserPhone">
              {'+ '}
              {(user.phoneCallingCode || app.defaultCountryCallingCode).slice(1)}
              {' '}
              {user.phone}
            </h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">
              {appString.translations.generalInformation.personalInformation}
            </h3>
            <div className="PersonalInformation__UserDetails-Field">
              {
                InputBox.map((data) => (
                  <div key={data} className="InputBox">
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
                      placeholder={appString.translations.generalInformation[data]}
                    />
                    <label className={data} htmlFor={data}>
                      {appString.translations.generalInformation[data]}
                    </label>
                    <div className="InputBox__Error">{inputError[data]}</div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="AttachedPhotos">
            <h3 className="AttachedPhotos__Label">
              {appString.translations.generalInformation.attachedPhotos}
            </h3>

            <div className="AttachedPhotos__Document-Front">
              <img
                className="photo__image"
                src={front.voterCardFront}
                alt="front id"
              />
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
              <div
                onClick={mediaHandler}
                tabIndex={0}
                id="Delete_Front"
                className="DocumentFront-Remover"
                role="button"
              />
            </div>

            <div className="AttachedPhotos__Document-Back">
              <img
                className="photo__image"
                src={back.voterCardBack}
                alt="back id"
              />
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
              <div
                onClick={mediaHandler}
                tabIndex={0}
                id="Delete_Back"
                className="DocumentBack-Remover"
                role="button"
              />
            </div>

            <div className="AttachedPhotos__Selfie">
              <img
                className="photo__image"
                src={selfie.selfie}
                alt="selfie"
              />
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
              <div
                onClick={mediaHandler}
                tabIndex={0}
                id="Delete_Selfie"
                className="Selfie-Remover"
                role="button"
              />
            </div>
          </div>

          <div className="ActionButton">
            <button
              type="button"
              disabled={isDisabled}
            >
              {appString.translations.onboarding.continue}
            </button>
          </div>
        </Main>
      </DetailsScreen>
    </WebView>
  );
};

export default Details;
