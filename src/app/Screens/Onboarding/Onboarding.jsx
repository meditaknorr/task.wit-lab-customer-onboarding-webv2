import React from 'react';
import { useStore } from '../../Hooks/useStore';

const Onboarding = () => {
  const { phone, setPhone } = useStore();

  return (
    <>
      Contador:
      {' '}
      {phone}
      {' '}
      --
      {' '}
      <span onClick={() => setPhone(phone + 1)}>Contador</span>
    </>
  );
};

export default Onboarding;
