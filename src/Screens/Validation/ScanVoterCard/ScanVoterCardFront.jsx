import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const ScanVoterCardFront = () => {
  const dispatch = storeSetter();
  const { app, user } = storeGetter();
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(user.id === 2 && user.voterCardFront);
  const { appString } = useLocale(app.language);
  const router = useHistory();
  const overlayMode = 0;
  const voterCardFront = { id: 2, storePropertyName: 'voterCardFront' };

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'SET_USER',
      payload: {
        [voterCardFront.storePropertyName]: null,
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
            type={appString.translations.scanVoterCard.takePhotoFront}
            footer={appString.translations.scanVoterCard.centerPhoto}
            overlayMode={overlayMode}
            setPhoto={setPhoto}
            closeCamera={() => {
              router.push('/registration/onboarding/phonenumber/confirmation');
            }}
            storeProperty={voterCardFront}
          />
        )
        : (
          <ConfirmPhoto
            description={appString.translations.confirmPhoto.frontSidePhoto}
            photo={photo}
            takeAnotherPhoto={takeAnotherPhoto}
            usePhoto={() => {
              router.push('/registration/validation/scan/front');
            }}
            storeProperty={voterCardFront}
            screenLabel={appString.translations.confirmPhoto.voterCard}
            progressBar={2}
            overlayMode={overlayMode}
          />
        )}
    </>
  );
};

export default ScanVoterCardFront;
