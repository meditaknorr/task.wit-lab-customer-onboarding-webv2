import React, { useContext, useEffect, useState } from 'react';
import { StateContext, DispatchContext } from '../../../Contexts/AppStoreContexts';
import { useLocale } from '../../../Hooks/useLocale';
import { useHistory } from 'react-router';
import BaseStatusSubmission from '../../../Components/BaseStatusSubmission/BaseStatusSubmission';
import Header from '../../../Components/Header/Header';
import validatingImage from '../../../Assets/Images/icons/icon_loading.svg'
import errorImage from '../../../Assets/Images/icons/illustrations_card_error.svg'

const SubmitAndValidate = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const language = (state.filter((data) => data.id === 1))[0];
    const { appString } = useLocale(language.language);
    const router = useHistory();
    const [showHeader, setShowHeader] = useState(false);
    const submissionResult = false; //this is a mock value to define if the submission was sucessfully submitted or not 
    const [submissionStatus, setSubmissionStatus] = useState({
        image: validatingImage,
        alt: 'Icon that inddicates that the submission is beig validated',
        description: {
            description1: appString.translations.submitAndValidate.validating,
        }
    });


    const restartTheSubmissionProcess = () => {
        dispatch({ type: 'REMOVE_STATE', payload: { id: 4 } });
        dispatch({ type: 'REMOVE_STATE', payload: { id: 5 } });
        dispatch({ type: 'REMOVE_STATE', payload: { id: 6 } });

        router.push('/registration/validation/scan-voter-card-front')
    }


    useEffect(() => {
        if (submissionResult)
            router.push('/registration/details/review-details');
        else {
            setShowHeader(true);
            setSubmissionStatus({
                image: errorImage,
                alt: 'Icon that inddicates that an error occured during the submission',
                title: appString.translations.submitAndValidate.photoUnclear,
                description: {
                    description1: appString.translations.submitAndValidate.photoUnclearDescription1,
                    description2: appString.translations.submitAndValidate.photoUnclearDescription2,
                },
                buttonText: appString.translations.submitAndValidate.scanVoterID,
                action: restartTheSubmissionProcess
            });
        }
    }, [submissionResult, appString]);

    return (
        <>
            {showHeader && (<Header
                logo={0}
                backButton={1}
                screenLabel={appString.translations.confirmPhoto.voterCard}
                languageButton={1}
                language={language.language}
                progressBarPercent={5}
            />)

            }
            <BaseStatusSubmission
                submissionStatus={submissionStatus}
            />
        </>
    )
};

export default SubmitAndValidate;
