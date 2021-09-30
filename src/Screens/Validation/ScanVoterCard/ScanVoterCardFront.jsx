import React, { useState, useContext } from 'react';
import { StateContext, DispatchContext } from '../../../Contexts/AppStoreContexts';
import { useLocale } from '../../../Hooks/useLocale';
import CaptureImage from '../../../Components/CaptureImage/CaptureImage';
import ConfirmPhoto from '../../../Components/ConfirmPhoto/ConfirmPhoto';
import { useHistory } from 'react-router-dom';


const ScanVoterCardFront = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const [photo, setPhoto] = useState(state.find(storeProperty => (storeProperty.id === 4 && storeProperty.voterCardFront)));
    const language = (state.filter((data) => data.id === 1))[0];
    const { appString } = useLocale(language.language);
    const router = useHistory();
    const overlayMode = 0;
    const voterCardFront = { id: 4, storePropertyName: 'voterCardFront' };

    const takeAnotherPhoto = () => {
        dispatch({
            type: 'UPDATE_STATE',
            payload: {
                id: 4,
                [voterCardFront.storePropertyName]: null
            }
        });
        setPhoto(null)
    }

    return (
        <>
            {!photo ?
                <CaptureImage
                    title={appString.translations.scanVoterCard.scanCard}
                    type={appString.translations.scanVoterCard.takePhotoFront}
                    footer={appString.translations.scanVoterCard.centerPhoto}
                    overlayMode={overlayMode}
                    setPhoto={setPhoto}
                    closeCamera={() => { router.push('/registration/onboarding') }}
                    storeProperty={voterCardFront}
                />
                :
                <ConfirmPhoto
                    description={appString.translations.confirmPhoto.frontSidePhoto}
                    photo={photo}
                    takeAnotherPhoto={takeAnotherPhoto}
                    usePhoto={() => { router.push('/registration/validation/scan-voter-card-back') }}
                    storeProperty={voterCardFront}
                    screenLabel={appString.translations.confirmPhoto.voterCard}
                    progressBar={2}
                    overlayMode={overlayMode}
                />
            }
        </>
    );
};

export default ScanVoterCardFront;
