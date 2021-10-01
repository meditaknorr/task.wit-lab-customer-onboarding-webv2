import React from 'react';
import { Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { storeGetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../../Components/Header/Header';
import WebView from '../../Layouts/WebView/WebView';
import { PhoneNumberScreen, Main } from './Style';

function validateInput(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const PhoneNumber = () => {
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  return (
    <WebView>
      <PhoneNumberScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={1}
          languageButton={1}
          language={app.language}
        />
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

            <div className="PersonalInformation__UserDetails">
              <div className="PersonalInformation__UserDetails-Field">
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
                    <Form>
                      <div className="Field">
                        <Field id="firstName" name="firstName" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="firstName">First name</label>
                      </div>

                      <div className="Field">
                        <Field id="lastName" name="lastName" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="lastName">Last name</label>
                      </div>

                      <div className="Field">
                        <Field id="birthDate" name="birthDate" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="birthDate">Date of birth</label>
                      </div>

                      <div className="Field">
                        <Field id="birthDate" name="birthDate" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="birthDate">Place of birth</label>
                      </div>

                      <div className="Field">
                        <Field id="birthDate" name="birthDate" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="birthDate">Gender</label>
                      </div>

                      <div className="Field">
                        <Field id="birthDate" name="birthDate" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="birthDate">Citizen / Nationality</label>
                      </div>

                      <div className="Field">
                        <Field id="birthDate" name="birthDate" validate={validateInput} />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="birthDate">Voter number</label>
                      </div>

                      <button type="submit">Submit</button>
                    </Form>
                  )}
                </Formik>
              </div>

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
      </PhoneNumberScreen>
    </WebView>
  );
};

export default PhoneNumber;
