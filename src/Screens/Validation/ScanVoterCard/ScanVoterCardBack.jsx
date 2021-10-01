import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const ScanVoterCardBack = () => {
  const dispatch = storeSetter();
  const { app, user } = storeGetter();
  const router = useHistory();
  const { appString } = useLocale(app.language);
  const [photo, setPhoto] = useState(user.id === 2 && user.voterCardBack);
  const voterCardBack = { id: 2, storePropertyName: 'voterCardBack' };
  const overlayMode = 0;

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'SET_USER',
      payload: {
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
