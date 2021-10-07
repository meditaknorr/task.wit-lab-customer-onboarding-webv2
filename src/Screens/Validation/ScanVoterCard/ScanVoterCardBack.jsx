import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StateContext, DispatchContext } from '../../../Contexts/AppStoreContexts';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const ScanVoterCardBack = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const language = (state.filter((data) => data.id === 1))[0];
  const { appString } = useLocale(language.language);
  const router = useHistory();
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(state.find((storeProperty) => (storeProperty.id === 5
    && storeProperty.voterCardBack)));
  const voterCardBack = { id: 5, storePropertyName: 'voterCardBack' };
  const overlayMode = 0;

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        id: 5,
        [voterCardBack.storePropertyName]: null,
      },
    });
    setPhoto(null);
  };

  return (
    <>
      {!photo
        ? (
          <CaptureImage
            title={appString.translations.scanVoterCard.scanCard}
            type={appString.translations.scanVoterCard.takePhotoBack}
            footer={appString.translations.scanVoterCard.centerPhoto}
            overlayMode={overlayMode}
            setPhoto={setPhoto}
            closeCamera={() => {
              router.push('/registration/validation/scan-voter-card-front');
            }}
            storeProperty={voterCardBack}
          />
        )
        : (
          <ConfirmPhoto
            description={appString.translations.confirmPhoto.backSidePhoto}
            photo={photo}
            takeAnotherPhoto={takeAnotherPhoto}
            usePhoto={() => {
              router.push('/registration/validation/selfie');
            }}
            storeProperty={voterCardBack}
            screenLabel={appString.translations.confirmPhoto.voterCard}
            progressBar={2}
            overlayMode={overlayMode}
          />
        )}
    </>
  );
};

export default ScanVoterCardBack;
