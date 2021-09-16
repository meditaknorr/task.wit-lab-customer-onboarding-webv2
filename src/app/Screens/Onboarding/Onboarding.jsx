import React from 'react';
import {useStore} from '../../Hooks/useStore';

const Onboarding =() => {
  const {phone, setPhone} = useStore();

  return (
    <React.Fragment>
      Contador: {phone} -- <span onClick={() => setPhone(phone+1)}>Contador</span>
    </React.Fragment>
  )
}

export default Onboarding;
