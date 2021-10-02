import React from 'react';
import { Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { storeGetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
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
            <h1>Add the last details</h1>
            <h2>Provide some more details to complete your registration.</h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">Address information</h3>
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
                    <Field id="address" type="text" name="address" placeholder="Address *" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="firstName">First name</label>
                  </div>

                  <div className="Field">
                    <Field id="number" type="text" name="lastName" placeholder="Address *"  validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="lastName">Last name</label>
                  </div>

                  <div className="Field">
                    <Field id="Post Code" type="date" name="birthDate" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="birthDate">Date of birth</label>
                  </div>

                  <div className="Field">
                    <Field id="Town" type="text" name="town" validate={validateInput} />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="birthPlace">Place of birth</label>
                  </div>

                  <div className="Field">
                    <Field d="gender" name="gender" validate={validateInput} />
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
