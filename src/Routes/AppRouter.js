import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';
import PhoneNumber from '../Screens/Onboarding/PhoneNumber/PhoneNumber';
import PhoneNumberConfirmation from '../Screens/Onboarding/PhoneNumberConfirmation/PhoneNumberConfirmation';
import Selfie from '../Screens/Validation/Selfie/Selfie';
import ScanVoterCardBack from '../Screens/Validation/ScanVoterCard/ScanVoterCardBack';
import ScanVoterCardFront from '../Screens/Validation/ScanVoterCard/ScanVoterCardFront';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/registration/onboarding/" component={Onboarding} />
      <Route exact path="/registration/onboarding/phonenumber" component={PhoneNumber} />
      <Route exact path="/registration/onboarding/phonenumber/confirmation" component={PhoneNumberConfirmation} />
      <Route exact path="/registration/validation/scan/front" component={ScanVoterCardFront} />
      <Route exact path="/registration/validation/scan/back" component={ScanVoterCardBack} />
      <Route exact path="/registration/validation/selfie" component={Selfie} />
    </Switch>
  </Router>
);

export default AppRouter;
