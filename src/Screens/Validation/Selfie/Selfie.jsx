import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const Selfie = () => {
  const router = useHistory();
  const dispatch = storeSetter();
  const { app, user } = storeGetter();
  const { appString } = useLocale(app.language);
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(user.id === 2 && user.selfie);
  const selfie = { id: 6, storePropertyName: 'selfie' };
  const overlayMode = 1;

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'SET_USER',
      payload: {
        id: 2,
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
            closeCamera={() => { router.push('/registration/validation/scan-voter-card-back'); }}
            storeProperty={selfie}
          />
        )
        : (
          <ConfirmPhoto
            description={appString.translations.selfie.selfie}
            photo={photo}
            takeAnotherPhoto={takeAnotherPhoto}
            usePhoto={() => { console.log('TODO -> redirect to review details'); }}
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
