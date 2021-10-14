import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingBar } from './Style';

const ProgressBar = () => {
  const location = useLocation();
  const [progressLevel, setProgressLevel] = useState(0);

  useEffect(() => {
    if (location.pathname) {
      switch (location.pathname) {
        case '/registration/onboarding/phonenumber':
        case '/registration/onboarding/phonenumber/status':
          setProgressLevel(1);
          break;
        case '/registration/onboarding/phonenumber/confirmation':
        case '/registration/onboarding/confirmation/status':
          setProgressLevel(2);
          break;
        case '/registration/validation/submit':
          setProgressLevel(3);
          break;
        case '/registration/validation/selfie':
          setProgressLevel(5);
          break;
        case '/registration/details':
          setProgressLevel(6);
          break;
        case '/registration/details/additional':
          setProgressLevel(8);
          break;
        case '/registration/details/submission/success':
        case '/registration/details/submission/error':
          setProgressLevel(10);
          break;
        default:
          setProgressLevel(0);
          break;
      }
    }
  }, []);

  return (
    <LoadingBar percent={progressLevel}>
      <div className="Loading-Signal" />
    </LoadingBar>
  );
};

export default ProgressBar;
