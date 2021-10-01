import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingBar } from './Style';

const ProgressBar = () => {
  const location = useLocation();
  const [progressLevel, setProgressLevel] = useState(0);

  function progressLevelHandler(pathname) {
    switch (pathname) {
      case '/registration/onboarding/':
        setProgressLevel(0);
        break;
      case '/registration/onboarding/phonenumber':
        setProgressLevel(1);
        break;
      case '/registration/onboarding/phonenumber/confirmation':
        setProgressLevel(2);
        break;
      case '/registration/validation/scan/front':
        setProgressLevel(3);
        break;
      case '/registration/validation/scan/back':
        setProgressLevel(5);
        break;
      case '/registration/validation/selfie':
        setProgressLevel(6);
        break;
      case '/registration/details':
        setProgressLevel(7);
        break;
      default:
        setProgressLevel(0);
        break;
    }
  }

  useEffect(() => {
    if (location.pathname) {
      progressLevelHandler(location.pathname);
    }
  }, []);

  return (
    <LoadingBar percent={progressLevel}>
      <div className="Loading-Signal" />
    </LoadingBar>
  );
};

export default ProgressBar;
