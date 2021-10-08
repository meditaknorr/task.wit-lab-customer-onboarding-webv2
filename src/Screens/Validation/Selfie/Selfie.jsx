import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StateContext, DispatchContext } from '../../../Contexts/AppStoreContexts';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';

const Selfie = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const language = (state.filter((data) => data.id === 1))[0];
  const { appString } = useLocale(language.language);
  const router = useHistory();
  // eslint-disable-next-line max-len
  const [photo, setPhoto] = useState(state.find((storeProperty) => (storeProperty.id === 6 && storeProperty.selfie)));
  const selfie = { id: 6, storePropertyName: 'selfie' };
  const overlayMode = 1;

  const takeAnotherPhoto = () => {
    dispatch({
      type: 'UPDATE_STATE',
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
            closeCamera={() => {
              router.push('/registration/validation/scan-voter-card-back');
            }}
            storeProperty={selfie}
          />
        )
        : (
          <ConfirmPhoto
            description={appString.translations.selfie.selfie}
            photo={photo}
            takeAnotherPhoto={takeAnotherPhoto}
            usePhoto={() => {
              router.push('/registration/validation/submit-and-validate');
            }}
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
