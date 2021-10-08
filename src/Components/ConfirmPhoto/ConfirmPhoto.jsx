import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StateContext, DispatchContext } from '../../Contexts/AppStoreContexts';
import Header from '../Header/Header';
import { useLocale } from '../../Hooks/useLocale';
import { ConfirmPhotoScreen } from './Style';
import Button from '../Button/Button';

/**
 * Returns a React Component to confirm if the the user wants to use the current picture of not.
 * @param description  { a String that defines the description of
 * the photo that is ging to be displayed }
 * @param photo {a String containing the base64 text of the image}
 * @param takeAnotherPhoto {a FUNCTION to discard the current photo and
 * open the camera again}
 * @param usePhoto {a FUNCTION that uses the taken photo and sends it to te store}
 * @param storeProperty {a String containing the key value of the property
 * that needs to be sent to the store}
 * @param screenLabel {String with the header label for the screen}
 * @param progressBar {a Number with the percent of the progress
 * bar divided by 10 (must be from 0 - 10)}
 * @param overlayMode {a Number containing key that indicates either
 * the frame is rounded or squared - 1 for rounded and 0 for squared}
 * @returns {JSX.Element}
 * @constructor
 */
// eslint-disable-next-line max-len
const ConfirmPhoto = ({
  // eslint-disable-next-line max-len
  description, photo, usePhoto, takeAnotherPhoto, storeProperty, screenLabel, progressBar, overlayMode,
}) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const language = (state.filter((data) => data.id === 1))[0];
  const { appString } = useLocale(language.language);

  const useThisPhoto = () => {
    dispatch({
      type: 'ADD_STATE',
      payload: {
        id: storeProperty.id,
        [storeProperty.storePropertyName]: photo[storeProperty.storePropertyName],
      },
    });
    usePhoto();
  };

  return (
    <>
      <Header
        logo={0}
        backButton={1}
        screenLabel={screenLabel}
        languageButton={1}
        language={language.language}
        progressBarPercent={progressBar}
      />
      <ConfirmPhotoScreen overlayMode={overlayMode}>
        <div className="confirm-photo">
          <div className="confirm-photo__description">
            <span>{description}</span>
          </div>
          <div className="confirm-photo__image-wrapper row">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="confirm-photo__image" src={photo[storeProperty.storePropertyName]} alt="The image that was captured in the previous page" />
          </div>

          <div className="footer">
            <Button
              text={appString.translations.confirmPhoto.usePhoto}
              action={useThisPhoto}
              mode="normal"
            />

            <Button
              text={appString.translations.confirmPhoto.takeAnotherPhoto}
              action={takeAnotherPhoto}
              mode="flat"
            />
          </div>
        </div>
      </ConfirmPhotoScreen>
    </>
  );
};

ConfirmPhoto.propTypes = {
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  photo: PropTypes.object.isRequired,
  takeAnotherPhoto: PropTypes.func.isRequired,
  usePhoto: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  storeProperty: PropTypes.object.isRequired,
  screenLabel: PropTypes.string.isRequired,
  progressBar: PropTypes.number.isRequired,
  overlayMode: PropTypes.number.isRequired,
};

export default ConfirmPhoto;
