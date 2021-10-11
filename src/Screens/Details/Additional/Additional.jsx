import React from 'react';
import { Button } from 'reactstrap';
import { storeGetter } from '../../../../../unpatched - advanced/src/Hooks/useStore';
import { useLocale } from '../../../../../unpatched - advanced/src/Hooks/useLocale';
import Header from '../../../../../unpatched - advanced/src/Components/Header/Header';
import WebView from '../../../../../unpatched - advanced/src/Layouts/WebView/WebView';
import { Main, DetailsScreen } from './Style';

const Details = () => {
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

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
            <h1>Add the last details</h1>
            <h2>Provide some more details to complete your registration.</h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">Address information</h3>
            <div className="Field">
              <Field id="address" type="text" name="address" placeholder="Address *" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="address">Address *</label>
            </div>

            <div className="Field">
              <Field id="number" type="text" name="number" placeholder="Number" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="number">Number</label>
            </div>

            <div className="Field">
              <Field id="postCode" name="postCode" placeholder="Post code" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="postCode">Post code</label>
            </div>

            <div className="Field">
              <Field id="town" type="text" name="town" placeholder="Town *" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="town">Town *</label>
            </div>

            <div className="Field">
              <Field id="district" name="district" placeholder="District *" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="gender">District *</label>
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
