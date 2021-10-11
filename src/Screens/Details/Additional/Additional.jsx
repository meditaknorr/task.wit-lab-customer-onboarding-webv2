import React from 'react';
import { Button } from 'reactstrap';
import { storeGetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import Header from '../../../Components/Header/Header';
import WebView from '../../../Layouts/WebView/WebView';
import { Main, DetailsScreen } from './Style';

const Details = () => {
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  return (
    <WebView>
      <DetailsScreen>
        <Header
          backButton={1}
          screenLabel={appString.translations.header.regAdditionalInformation}
          greyBack={1}
          languageButton={1}
          language={app.language}
          progressBar={1}
        />
        <Main>
          <div className="HeadingText">
            <h1>Add the last details</h1>
            <h2>Provide some more details to complete your registration.</h2>
          </div>

          <div className="PersonalInformation">
            <h3 className="PersonalInformation__Label">Address information</h3>
            <div className="InputBox">
              <input id="address" type="text" name="address" placeholder="Address *" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="address">Address *</label>
            </div>

            <div className="InputBox">
              <input id="number" type="text" name="number" placeholder="Number" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="number">Number</label>
            </div>

            <div className="InputBox">
              <input id="postCode" name="postCode" placeholder="Post code" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="postCode">Post code</label>
            </div>

            <div className="InputBox">
              <input id="town" type="text" name="town" placeholder="Town *" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="town">Town *</label>
            </div>

            <div className="InputBox">
              <input id="district" name="district" placeholder="District *" />
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
