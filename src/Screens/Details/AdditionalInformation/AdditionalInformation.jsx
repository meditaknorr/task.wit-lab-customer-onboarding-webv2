import React, { useRef, useState } from 'react';
import { Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { Main, DetailsScreen } from './Style';

const validateInput = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/[0-9!@#$%^&*(),.?":{}|<>]/g.test(value)) {
    error = 'Invalid.';
  }
  return error;
};

const validateInputNumbers = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (/[0-9]/g.test(value)) {
    error = 'Invalid.';
  }
  return error;
};

const AdditionalInformation = () => {
  const history = useHistory();
  const dispatch = storeSetter();
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);
  const [isComplete, setIsComplete] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    dispatch(
      {
        type: 'SET_USER_PERSONALDETAILS',
        payload: {
          id: 11,
          ...formRef.current.values,
        },
      },
    );
    history.push('/registration/details/confirmation/successful/');
  };

  const handleInputsChange = () => {
    if (formRef.current) {
      const formStatus = [formRef.current.values].find((data) => data !== '');
      setIsComplete(formStatus && true);
    }
  };

  return (
    <WebView>
      <DetailsScreen>
        <Header
          logo={0}
          backButton={1}
          screenLabel={appString.translations.header.regAdditionalInformation}
          languageButton={1}
          language={app.language}
        />
        <Main>
          <div className="HeadingText">
            <h1>{appString.translations.additionalinformation.addLastDetails}</h1>
            <h2>{appString.translations.additionalinformation.provideMoreDetails}</h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">{appString.translations.additionalinformation.addressInformation}</h3>
            <Formik
              innerRef={formRef}
              handleChange={handleInputsChange}
              initialValues={{
                address: 'Av. Eduardo Mondlane',
                number: '17',
                postCode: '2100',
                town: 'Beira',
                district: 'Beira',
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors }) => (
                <Form className="AddressInformation__UserDetails-Field">
                  <div className="Field">
                    <Field
                      id="address"
                      type="text"
                      name="address"
                      onBlur={handleInputsChange}
                      placeholder={appString.translations.additionalinformation.address}
                      validate={validateInput}
                    />
                    {errors.address && <div className="error">{errors.address}</div>}
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="address">
                      {appString.translations.additionalinformation.address}
                      {' *'}
                    </label>
                  </div>

                  <div className="Field">
                    <Field
                      id="number"
                      type="text"
                      name="number"
                      onBlur={handleInputsChange}
                      placeholder={appString.translations.additionalinformation.number}
                      validate={validateInput}
                    />
                    {errors.number && <div className="error">{errors.number}</div>}
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="number">{appString.translations.additionalinformation.number}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="postCode"
                      type="number"
                      name="postCode"
                      onBlur={handleInputsChange}
                      placeholder={appString.translations.additionalinformation.postCode}
                      validate={validateInputNumbers}
                    />
                    {errors.postCode && <div className="error">{errors.postCode}</div>}
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="postCode" className="postCodeLabel">{appString.translations.additionalinformation.postCode}</label>
                  </div>

                  <div className="Field">
                    <Field
                      id="town"
                      type="text"
                      name="town"
                      onBlur={handleInputsChange}
                      placeholder={appString.translations.additionalinformation.town}
                      validate={validateInput}
                    />
                    {errors.town && <div className="error">{errors.town}</div>}
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="town">
                      {appString.translations.additionalinformation.town}
                      {' *'}
                    </label>
                  </div>

                  <div className="Field">
                    <Field
                      id="district"
                      name="district"
                      onBlur={handleInputsChange}
                      placeholder={appString.translations.additionalinformation.district}
                      validate={validateInput}
                    />
                    {errors.district && <div className="error">{errors.district}</div>}
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="gender">
                      {appString.translations.additionalinformation.district}
                      {' *'}
                    </label>
                  </div>
                </Form>
              )}
            </Formik>
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

export default AdditionalInformation;
