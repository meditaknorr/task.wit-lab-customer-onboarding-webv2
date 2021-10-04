import React, { useRef, useState } from 'react';
import { Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { Main, Modal, DetailsScreen } from './Style';

const validateInput = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/[0-9!@#$%^&*(),.?":{}|<>]/g.test(value)) {
    error = 'Invalid.';
  }
  return error;
};

const validateDate = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\d\d$/g.test(value)) {
    error = 'Invalid.';
  }
  return error;
};

const validateVotersCard = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (/[0-9\\/.-]/g.test(value)) {
    error = 'Invalid.';
  }
  return error;
};

const Details = () => {
  const history = useHistory();
  const dispatch = storeSetter();
  const { app, user } = storeGetter();
  const { appString } = useLocale(app.language);
  const [isComplete, setIsComplete] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    dispatch(
      {
        type: 'SET_USER_PERSONALDETAILS',
        payload: {
          id: 10,
          ...formRef.current.values,
        },
      },
    );
    history.push('/registration/details/additionalinformation');
  };

  const handleInputsChange = () => {
    if (formRef.current) {
      const formStatus = [formRef.current.values].find((data) => data !== '');
      setIsComplete(formStatus && true);
    }
  };

  const capturedMediaHandler = (e) => {
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
          logo={0}
          backButton={1}
          screenLabel={appString.translations.header.regGeneralInformation}
          languageButton={1}
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
              {(user.phoneCallingCode || app.defaultCountryCallingCode)}
              {' '}
              {user.phone}
            </h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">{appString.translations.generalInformation.personalInformation}</h3>
            <Formik
              innerRef={formRef}
              handleChange={handleInputsChange}
              initialValues={{
                firstName: 'Tanazura',
                lastName: 'Vicentete',
                birthDate: '10/04/2000',
                birthPlace: 'Beira',
                gender: 'Feminino',
                nationality: 'Moçambicana',
                voterNumber: '01010100',
              }}
            >
              {({ errors }) => (
                <Form className="PersonalInformation__UserDetails-Field" autoComplete="off">
                  <div className="Field">
                    <Field
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder={appString.translations.generalInformation.firstName}
                      minLength="3"
                      maxLength="18"
                      onBlur={handleInputsChange}
                      validate={validateInput}
                      required
                    />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                    <label htmlFor="firstName">{appString.translations.generalInformation.firstName}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder={appString.translations.generalInformation.lastName}
                      minLength="3"
                      maxLength="18"
                      onBlur={handleInputsChange}
                      validate={validateInput}
                      required
                    />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                    <label htmlFor="lastName">{appString.translations.generalInformation.lastName}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="birthDate"
                      type="text"
                      name="birthDate"
                      placeholder={appString.translations.generalInformation.dateOfBirth}
                      minLength="10"
                      maxLength="10"
                      onBlur={handleInputsChange}
                      validate={validateDate}
                      required
                    />
                    {errors.birthDate && <div className="error">{errors.birthDate}</div>}
                    <label htmlFor="birthDate">{appString.translations.generalInformation.dateOfBirth}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="birthPlace"
                      type="text"
                      name="birthPlace"
                      placeholder={appString.translations.generalInformation.placeOfBirth}
                      minLength="3"
                      maxLength="18"
                      onBlur={handleInputsChange}
                      validate={validateInput}
                      required
                    />
                    {errors.birthPlace && <div className="error">{errors.birthPlace}</div>}
                    <label htmlFor="birthPlace">{appString.translations.generalInformation.placeOfBirth}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="gender"
                      name="gender"
                      placeholder={appString.translations.generalInformation.gender}
                      minLength="3"
                      maxLength="18"
                      onBlur={handleInputsChange}
                      validate={validateInput}
                      required
                    />
                    {errors.gender && <div className="error">{errors.gender}</div>}
                    <label htmlFor="gender">{appString.translations.generalInformation.gender}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="nationality"
                      name="nationality"
                      placeholder={appString.translations.generalInformation.citizenNationality}
                      minLength="3"
                      maxLength="18"
                      onBlur={handleInputsChange}
                      validate={validateInput}
                      required
                    />
                    {errors.nationality && <div className="error">{errors.nationality}</div>}
                    <label htmlFor="nationality">{appString.translations.generalInformation.citizenNationality}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="voterNumber"
                      name="voterNumber"
                      placeholder={appString.translations.generalInformation.voterNumber}
                      minLength="3"
                      maxLength="18"
                      onBlur={handleInputsChange}
                      validate={validateVotersCard()}
                      required
                    />
                    {errors.voterNumber && <div className="error">{errors.voterNumber}</div>}
                    <label htmlFor="voterNumber">{appString.translations.generalInformation.voterNumber}</label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="AttachedPhotos">
            <h3 className="AttachedPhotos__Label">{appString.translations.generalInformation.attachedPhotos}</h3>
            <div className="AttachedPhotos__Document-Front">
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
              <div
                onClick={capturedMediaHandler}
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
                onClick={capturedMediaHandler}
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
                onClick={capturedMediaHandler}
                tabIndex={0}
                id="Delete_Selfie"
                className="Selfie-Remover"
                role="button"
              />
            </div>
          </div>

          <div className="ActionButton">
            <Button
              name="submit"
              onClick={handleSubmit}
              disabled={!isComplete}
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
