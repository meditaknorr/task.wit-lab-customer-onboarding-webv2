import React from 'react';
import { Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
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

  const actionButtonHandler = () => {
    history.push('/registration/details/aditionalinformation');
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
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {() => (
                <Form className="PersonalInformation__UserDetails-Field">
                  <div className="Field">
                    <Field id="firstName" type="text" name="firstName" placeholder={appString.translations.generalInformation.firstName} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="firstName">{appString.translations.generalInformation.firstName}</label>
                  </div>

                  <div className="Field">
                    <Field id="lastName" type="text" name="lastName" placeholder={appString.translations.generalInformation.lastName} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="lastName">{appString.translations.generalInformation.lastName}</label>
                  </div>

                  <div className="Field">
                    <Field id="birthDate" name="birthDate" placeholder={appString.translations.generalInformation.dateOfBirth} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="birthDate">{appString.translations.generalInformation.dateOfBirth}</label>
                  </div>

                  <div className="Field">
                    <Field id="birthDate" type="text" name="birthPlace" placeholder={appString.translations.generalInformation.placeOfBirth} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="birthPlace">{appString.translations.generalInformation.placeOfBirth}</label>
                  </div>

                  <div className="Field">
                    <Field id="gender" name="gender" placeholder={appString.translations.generalInformation.gender} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="gender">{appString.translations.generalInformation.gender}</label>
                  </div>

                  <div className="Field">
                    <Field id="nationality" name="nationality" placeholder={appString.translations.generalInformation.citizenNationality} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="nationality">{appString.translations.generalInformation.citizenNationality}</label>
                  </div>

                  <div className="Field">
                    <Field id="voternumber" name="voternumber" placeholder={appString.translations.generalInformation.voterNumber} validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="voternumber">{appString.translations.generalInformation.voterNumber}</label>
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
              <div onClick={capturedMediaHandler} tabIndex={0} id="Delete_Front" className="DocumentFront-Remover" role="button" />
            </div>
            <div className="AttachedPhotos__Document-Back">
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
              <div onClick={capturedMediaHandler} tabIndex={0} id="Delete_Back" className="DocumentBack-Remover" role="button" />
            </div>
            <div className="AttachedPhotos__Selfie">
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
              <div onClick={capturedMediaHandler} tabIndex={0} id="Delete_Selfie" className="Selfie-Remover" role="button" />
            </div>
          </div>

          <div className="ActionButton">
            <Button
              type="button"
              onClick={actionButtonHandler}
              disabled={false}
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
