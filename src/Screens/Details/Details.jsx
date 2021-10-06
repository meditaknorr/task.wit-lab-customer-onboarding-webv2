import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { Main, Modal, DetailsScreen } from './Style';

function validateInput(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const Details = () => {
  const { app, user } = storeGetter();
  const { appString } = useLocale(app.language);
  const history = useHistory();
  const [inputError, setInputErrors] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    humanGender: '',
    CitizenNationality: '',
    voterNumber: '',
  });

  const actionButtonHandler = () => {
    history.push('/registration/details/aditionalinformation');
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

  return (
    <WebView>
      <DetailsScreen>
        <Header
          greyBack={1}
          backButton={1}
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
        <Main>
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
                  placeholder={appString.translations.generalInformation.firstName}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="firstName">{appString.translations.generalInformation.firstName}</label>
                <div className="InputBox__Error">{inputError.firstName}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={appString.translations.generalInformation.lastName}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="lastName">{appString.translations.generalInformation.lastName}</label>
                <div className="InputBox__Error">{inputError.lastName}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  placeholder={appString.translations.generalInformation.dateOfBirth}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="birthDate">{appString.translations.generalInformation.dateOfBirth}</label>
                <div className="InputBox__Error">{inputError.birthDate}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="birthPlace"
                  name="birthPlace"
                  placeholder={appString.translations.generalInformation.placeOfBirth}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="birthPlace">{appString.translations.generalInformation.placeOfBirth}</label>
                <div className="InputBox__Error">{inputError.birthPlace}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="humanGender"
                  name="humanGender"
                  placeholder={appString.translations.generalInformation.gender}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="humanGender">{appString.translations.generalInformation.gender}</label>
                <div className="InputBox__Error">{inputError.humanGender}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="CitizenNationality"
                  name="CitizenNationality"
                  placeholder={appString.translations.generalInformation.citizenNationality}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="CitizenNationality">{appString.translations.generalInformation.citizenNationality}</label>
                <div className="InputBox__Error">{inputError.CitizenNationality}</div>
              </div>

              <div className="InputBox">
                <input
                  type="text"
                  id="voterNumber"
                  name="voterNumber"
                  placeholder={appString.translations.generalInformation.voterNumber}
                  validate={validateInput}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="voterNumber">{appString.translations.generalInformation.voterNumber}</label>
                <div className="InputBox__Error">{inputError.voterNumber}</div>
              </div>
            </div>
          </div>

          <div className="AttachedPhotos">

            <h3 className="AttachedPhotos__Label">
              {appString.translations.generalInformation.attachedPhotos}
            </h3>

            <div className="AttachedPhotos__Document-Front">
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
              onClick={actionButtonHandler}
              disabled={false}
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
