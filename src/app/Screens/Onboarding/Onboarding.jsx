import React from 'react';
import { useStore } from '../../Hooks/useStore';

const Onboarding = () => {
  const { phone } = useStore();

  return (
    <>
      Onboarding Counter:
      {phone}
    </>
  );
};

export default Onboarding;
