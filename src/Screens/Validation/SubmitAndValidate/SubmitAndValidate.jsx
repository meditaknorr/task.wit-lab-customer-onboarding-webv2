import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../Hooks/useLocale';
import { storeGetter, storeSetter } from '../../../Hooks/useStore';
import BaseStatusSubmission from '../../../Components/BaseStatusSubmission/BaseStatusSubmission';
import Header from '../../../Components/Header/Header';
import validatingImage from '../../../Assets/Images/icons/icon_loading.svg';
import errorImage from '../../../Assets/Images/icons/illustrations_card_error.svg';

const SubmitAndValidate = () => {
  const { app, demo, user } = storeGetter();
  const dispatch = storeSetter();
  const { appString } = useLocale(app.language);
  const router = useHistory();
  const [showHeader, setShowHeader] = useState(false);
  // eslint-disable-next-line max-len
  const submissionResult = demo.errorOnSubmitAndValidation === user.phone; // this is a mock value to define if the submission was sucessfully submitted or not
  const [submissionStatus, setSubmissionStatus] = useState({
    image: validatingImage,
    alt: 'Icon that indicates that the submission is being validated',
    description: {
      description1: appString.translations.submitAndValidate.validating,
    },
  });

  const restartTheSubmissionProcess = () => {
    dispatch({ type: 'REMOVE_MEDIA', payload: { id: 4 } });
    dispatch({ type: 'REMOVE_MEDIA', payload: { id: 5 } });
    dispatch({ type: 'REMOVE_MEDIA', payload: { id: 6 } });

    router.push('/registration/validation/scan/front');
  };

  const setResultOnScreen = () => {
    setShowHeader(true);
    setSubmissionStatus({
      image: errorImage,
      alt: 'Icon that indicates that an error occurred during the submission',
      title: appString.translations.submitAndValidate.photoUnclear,
      description: {
        description1: appString.translations.submitAndValidate.photoUnclearDescription1,
        description2: appString.translations.submitAndValidate.photoUnclearDescription2,
      },
      buttonText: appString.translations.submitAndValidate.scanVoterID,
      action: restartTheSubmissionProcess,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (submissionResult) {
        router.push('/registration/details');
      } else {
        setResultOnScreen();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [submissionResult, appString]);// appString

  return (
    <>
      {showHeader ? (
        <Header
          greyBack={1}
          screenLabel={appString.translations.confirmPhoto.voterCard}
          languageButton={1}
          language={app.language}
          progressBar={1}
          ghostBlock={1}
        />
      ) : (
        <Header
          language={app.language}
          ghostBlock={1}
        />
      )}
      <BaseStatusSubmission
        submissionStatus={submissionStatus}
      />
    </>
  );
};

export default SubmitAndValidate;
