import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';
import { photo as scanHelper } from '../../../Helpers/scanHelper';

const ScanVoterCardBack = () => {
  const dispatch = storeSetter();
  const { app, media } = storeGetter();
  const { appString } = useLocale(app.language);
  const router = useHistory();
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(media.find((storeProperty) => (storeProperty.id === 5 && storeProperty.voterCardBack)));
  const voterCardBack = { id: 5, storePropertyName: 'voterCardBack' };
  const overlayMode = 0;
  const front = scanHelper(media, 4);
  const selfie = scanHelper(media, 6);

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'UPDATE_MEDIA',
      payload: {
        id: 5,
        [voterCardBack.storePropertyName]: null,
        side: null,
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
              router.push('/registration/validation/scan/front');
            }}
            storeProperty={voterCardBack}
          />
        )
        : (
          <ConfirmPhoto
            description={appString.translations.confirmPhoto.backSidePhoto}
            photo={photo}
            sidePhoto="Back"
            takeAnotherPhoto={takeAnotherPhoto}
            usePhoto={() => {
              if (front.voterCardBack !== null && selfie.selfie !== null) {
                router.push('/registration/validation/submit');
              } else {
                router.push('/registration/validation/selfie');
              }
            }}
            storeProperty={voterCardBack}
            screenLabel={appString.translations.confirmPhoto.voterCard}
            progressBar={1}
            overlayMode={overlayMode}
          />
        )}
    </>
  );
};

export default ScanVoterCardBack;
