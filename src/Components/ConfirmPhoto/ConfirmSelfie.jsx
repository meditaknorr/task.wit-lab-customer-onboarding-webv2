import React from 'react';
import PropTypes from 'prop-types';
import { storeGetter, storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import Header from '../Header/Header';
import { ConfirmPhotoScreen } from './Style';
import Button from '../Button/Button';

/**
 * Returns a React Component to confirm if the the user wants to use the current picture of not.
 * @param description  { a String that defines the description of the photo
 * that is ging to be displayed }
 * @param photo {a String containing the base64 text of the image}
 * @param takeAnotherPhoto {a FUNCTION to discard the current photo and open the camera again}
 * @param usePhoto {a FUNCTION that uses the taken photo and sends it to te store}
 * @param storeProperty {a String containing the key value of the property that
 * needs to be sent to the store}
 * @param screenLabel {String with the header label for the screen}
 * @param progressBar {a Number with the percent of the progress bar
 * divided by 10 (must be from 0 - 10)}
 * @param overlayMode {a Number containing key that indicates either
 * the frame is rounded or squared - 1 for rounded and 0 for squared}
 * @returns {JSX.Element}
 * @constructor
 */
const ConfirmSelfie = ({
  description,
  photo,
  usePhoto,
  backButtonURL,
  takeAnotherPhoto,
  storeProperty,
  screenLabel,
  progressBar,
  overlayMode,
}) => {
  const dispatch = storeSetter();
  const { app } = storeGetter();
  const { appString } = useLocale(app.language);

  const useThisPhoto = () => {
    dispatch({
      type: 'ADD_MEDIA',
      payload: {
        id: storeProperty.id,
        [storeProperty.storePropertyName]: photo[storeProperty.storePropertyName],
        side: 'Selfie',
      },
    });
    usePhoto();
  };

  const removeBackPhoto = () => {
    dispatch({
      type: 'UPDATE_MEDIA',
      payload: {
        id: 5,
        voterCardBack: null,
        side: null,
      },
    });
  };

  const removeFrontPhoto = () => {
    dispatch({
      type: 'UPDATE_MEDIA',
      payload: {
        id: 4,
        voterCardFront: null,
        side: null,
      },
    });
  };

  const backButtonFunc = () => {
    removeBackPhoto();
    removeFrontPhoto();
  };

  return (
    <>
      <Header
        backButton={1}
        backButtonFunctions={backButtonFunc}
        backButtonURL={backButtonURL}
        screenLabel={screenLabel}
        languageButton={1}
        greyBack={1}
        language={app.language}
        progressBar={progressBar}
      />

      <ConfirmPhotoScreen overlayMode={overlayMode}>
        <div className="confirm-photo">
          <div className="confirm-photo__description">
            <span>{description}</span>
          </div>
          <div className="confirm-photo__image-wrapper row">
            <img
              className="confirm-photo__image"
              src={photo[storeProperty.storePropertyName]}
              alt="Selfie"
            />
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

ConfirmSelfie.propTypes = {
  description: PropTypes.string.isRequired,
  photo: PropTypes.objectOf(PropTypes.array).isRequired,
  takeAnotherPhoto: PropTypes.func.isRequired,
  usePhoto: PropTypes.func.isRequired,
  storeProperty: PropTypes.objectOf(PropTypes.func).isRequired,
  screenLabel: PropTypes.string.isRequired,
  backButtonURL: PropTypes.string.isRequired,
  progressBar: PropTypes.number.isRequired,
  overlayMode: PropTypes.number.isRequired,
};

export default ConfirmSelfie;
