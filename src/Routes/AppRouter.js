import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';
import ScanVoterCardFront from '../Screens/Validation/ScanVoterCard/ScanVoterCardFront';
import ScanVoterCardBack from '../Screens/Validation/ScanVoterCard/ScanVoterCardBack';
import Selfie from '../Screens/Validation/Selfie/Selfie';
import SubmitAndValidate from '../Screens/Validation/SubmitAndValidate/SubmitAndValidate';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/registration/onboarding/" component={Onboarding} />
      <Route exact path="/registration/validation/scan-voter-card-front" component={ScanVoterCardFront} />
      <Route exact path="/registration/validation/scan-voter-card-back" component={ScanVoterCardBack} />
      <Route exact path="/registration/validation/selfie" component={Selfie} />
      <Route exact path="/registration/validation/submit-and-validate" component={SubmitAndValidate} />
      <Route path="/home" component="Home" />
    </Switch>
  </Router>
);

export default AppRouter;
