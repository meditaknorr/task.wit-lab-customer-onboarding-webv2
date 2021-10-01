import React from 'react';
import { Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
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

const Details = () => {
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  return (
    <WebView>
      <DetailsScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={1}
          languageButton={1}
          language={app.language}
        />
        <Modal>
          <div className="Modal__Pane">
            <div className="Modal__Pane-Information">
              <h1>Delete ID card photo</h1>
              {/* eslint-disable-next-line max-len */}
              <h2>Are you sure you want to delete the photo of the back of your national ID card?</h2>
            </div>
            <div className="Modal__Pane-ActionButton">
              <button type="button" className="Modal__Pane-ActionButton-Cancel">Cancel</button>
              <button type="button" className="Modal__Pane-ActionButton-Delete">Delete</button>
            </div>
          </div>
        </Modal>
        <Main>
          <div className="HeadingText">
            <h1>Review your details</h1>
            <h2>Review and confirm the information. If needed, you can edit it.</h2>
          </div>

          <div className="PhoneDetails">
            <h3 className="PhoneDetails__Label">Phone number</h3>
            <h2 className="PhoneDetails__UserPhone">+258 847841000</h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">Personal Information</h3>
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
                    <Field id="firstName" type="text" name="firstName" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="firstName">First name</label>
                  </div>

                  <div className="Field">
                    <Field id="lastName" type="text" name="lastName" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="lastName">Last name</label>
                  </div>

                  <div className="Field">
                    <Field id="birthDate" type="date" name="birthDate" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="birthDate">Date of birth</label>
                  </div>

                  <div className="Field">
                    <Field id="birthDate" type="text" name="birthPlace" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="birthPlace">Place of birth</label>
                  </div>

                  <div className="Field">
                    <Field id="gender" name="gender" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="gender">Gender</label>
                  </div>

                  <div className="Field">
                    <Field id="nationality" name="nationality" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="nationality">Citizen / Nationality</label>
                  </div>

                  <div className="Field">
                    <Field id="voternumber" name="voternumber" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="voternumber">Voter number</label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="AttachedPhotos">
            <h3 className="AttachedPhotos__Label">Attached photos</h3>
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
