import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const Selfie = () => {
  const router = useHistory();
  const dispatch = storeSetter();
  const { app, media } = storeGetter();
  const { appString } = useLocale(app.language);
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(media.find((storeProperty) => (storeProperty.id === 6 && storeProperty.selfie)));
  const selfie = { id: 6, storePropertyName: 'selfie' };
  const overlayMode = 1;

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'UPDATE_MEDIA',
      payload: {
        id: 6,
        [selfie.storePropertyName]: null,
      },
    });
    setPhoto(null);
  };

  return (
    <>
      {!photo
        ? (
          <CaptureImage
            title={appString.translations.selfie.selfie}
            type={appString.translations.selfie.takeSelfie}
            footer=""
            overlayMode={overlayMode}
            setPhoto={setPhoto}
            closeCamera={() => { router.push('/registration/validation/scan/front'); }}
            storeProperty={selfie}
          />
        )
        : (
          <ConfirmPhoto
            description={appString.translations.selfie.selfie}
            photo={photo}
            takeAnotherPhoto={takeAnotherPhoto}
            usePhoto={() => { router.push('/registration/details'); }}
            storeProperty={selfie}
            screenLabel={appString.translations.selfie.selfie}
            progressBar={4}
            overlayMode={overlayMode}
          />
        )}
    </>
  );
};

export default Selfie;
