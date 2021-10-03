import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const ScanVoterCardFront = () => {
  const dispatch = storeSetter();
  const { app, media } = storeGetter();
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(media.find((storeProperty) => (storeProperty.id === 4 && storeProperty.voterCardFront)));
  const { appString } = useLocale(app.language);
  const router = useHistory();
  const overlayMode = 0;
  const voterCardFront = { id: 4, storePropertyName: 'voterCardFront' };

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'UPDATE_MEDIA',
      payload: {
        id: 4,
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
              router.push('/registration/validation');
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
              router.push('/registration/validation/scan/back');
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
