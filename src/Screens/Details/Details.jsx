import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { dateValidator, textValidator, voterValidator } from '../../Helpers/inputFormHelper';
import { DetailsScreen, Main, Modal } from './Style';

const Details = () => {
  const { app, user, media } = storeGetter();
  const dispatch = storeSetter();
  const { appString } = useLocale(app.language);
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    humanGender: '',
    citizenNationality: '',
    voterNumber: '',
  });
  const [inputError, setInputErrors] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    humanGender: '',
    citizenNationality: '',
    voterNumber: '',
  });

  const continueButton = () => {
    dispatch(
      {
        type: 'SET_USER_PERSONALDETAILS',
        payload: {
          id: 10,
          ...inputData,
        },
      },
    );
    history.push('/registration/details/additionalinformation');
  };

  const mediaHandler = (e) => {
    switch (e.target.id) {
      case 'Delete_Front':
        console.log('front');
        break;
      case 'Delete_Back':
        console.log('back');
        break;
      case 'Delete_Selfie':
        console.log('selfie');
        break;
      default:
        console.log('inconditional');
    }
  };

  const handleInputBlur = (e) => {
    if (!e.target.value) {
      setInputErrors((prevState) => ({
        ...prevState,
        [e.target.id]: '* is Required',
      }));
    }
  };

  const handleInput = (e) => {
    if (e.target.value) {
      setInputErrors((prevState) => ({
        ...prevState,
        [e.target.id]: '',
      }));

      switch (e.target.id) {
        case 'birthDate':
          if ((e.target.value).length >= 10) {
            if (!dateValidator(e.target.value)) {
              setInputErrors((prevState) => ({
                ...prevState,
                birthDate: '* is invalid',
              }));
            } else {
              setInputData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
              }));
            }
          }
          break;

        case 'voterNumber':
          if (!voterValidator(e.target.value)) {
            setInputErrors((prevState) => ({
              ...prevState,
              voterNumber: '* is invalid',
            }));
          } else {
            setInputData((prevState) => ({
              ...prevState,
              [e.target.id]: e.target.value,
            }));
          }
          break;

        default:
          if (!textValidator(e.target.value)) {
            setInputErrors((prevState) => ({
              ...prevState,
              [e.target.id]: '* is invalid',
            }));
          } else {
            setInputData((prevState) => ({
              ...prevState,
              [e.target.id]: e.target.value,
            }));
          }
          break;
      }
    }
  };

  const isChecked = () => {
    if (textValidator(inputData.firstName)
    && textValidator(inputData.lastName)
    && dateValidator(inputData.birthDate)
    && textValidator(inputData.birthPlace)
    && textValidator(inputData.humanGender)
    && textValidator(inputData.citizenNationality)
    && voterValidator(inputData.voterNumber)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isChecked() && Object.values(inputData).indexOf('') <= -1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputData]);

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
        <Modal>
          <div className="Modal__Pane">
            <div className="Modal__Pane-Information">
              <h1>{appString.translations.modal.deleteCardPhoto}</h1>
              {/* eslint-disable-next-line max-len */}
              <h2>{appString.translations.modal.deleteFrontPhotoConfirmation}</h2>
            </div>
            <div className="Modal__Pane-ActionButton">
              <button type="button" className="Modal__Pane-ActionButton-Cancel">{appString.translations.modal.cancel}</button>
              <button type="button" className="Modal__Pane-ActionButton-Delete">{appString.translations.modal.delete}</button>
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

              <div className="InputBox">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  minLength={3}
                  maxLength={20}
                  size={20}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.firstName}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="firstName"
                  htmlFor="firstName"
                >
                  {appString.translations.generalInformation.firstName}
                </label>
                <div className="InputBox__Error">{inputError.firstName}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  minLength={3}
                  maxLength={20}
                  size={20}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.lastName}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="lastName"
                  htmlFor="lastName"
                >
                  {appString.translations.generalInformation.lastName}
                </label>
                <div className="InputBox__Error">{inputError.lastName}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  minLength={10}
                  maxLength={10}
                  size={10}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.dateOfBirth}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="birthDate"
                  htmlFor="birthDate"
                >
                  {appString.translations.generalInformation.dateOfBirth}
                </label>
                <div className="InputBox__Error">{inputError.birthDate}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="birthPlace"
                  name="birthPlace"
                  minLength={3}
                  maxLength={15}
                  size={15}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.placeOfBirth}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="birthPlace"
                  htmlFor="birthPlace"
                >
                  {appString.translations.generalInformation.placeOfBirth}
                </label>
                <div className="InputBox__Error">{inputError.birthPlace}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="humanGender"
                  name="humanGender"
                  minLength={4}
                  maxLength={10}
                  size={10}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.gender}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="humanGender"
                  htmlFor="humanGender"
                >
                  {appString.translations.generalInformation.gender}
                </label>
                <div className="InputBox__Error">{inputError.humanGender}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="citizenNationality"
                  name="citizenNationality"
                  minLength={3}
                  maxLength={15}
                  size={15}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.citizenNationality}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="citizenNationality"
                  htmlFor="citizenNationality"
                >
                  {appString.translations.generalInformation.citizenNationality}
                </label>
                <div className="InputBox__Error">{inputError.citizenNationality}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="voterNumber"
                  name="voterNumber"
                  minLength={3}
                  maxLength={32}
                  size={32}
                  onChange={handleInput}
                  onBlur={handleInputBlur}
                  placeholder={appString.translations.generalInformation.voterNumber}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className="voterNumber"
                  htmlFor="voterNumber"
                >
                  {appString.translations.generalInformation.voterNumber}
                </label>
                <div className="InputBox__Error">{inputError.voterNumber}</div>
              </div>
            </div>
          </div>

          <div className="AttachedPhotos">

            <h3 className="AttachedPhotos__Label">
              {appString.translations.generalInformation.attachedPhotos}
            </h3>

            {
              (media.map((image) => (
                <div
                  key={image.id}
                  className={`AttachedPhotos__Document-${image.side}`}
                >
                  {/* eslint-disable-next-line max-len */}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
                  <div
                    onClick={mediaHandler}
                    tabIndex={0}
                    id={`Delete-${image.side}`}
                    className={`Document${image.side}-Remover`}
                    role="button"
                  />
                </div>
              ))
              )
            }

          </div>

          <div className="ActionButton">
            <button
              type="button"
              onClick={continueButton}
              disabled={(isDisabled)}
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
