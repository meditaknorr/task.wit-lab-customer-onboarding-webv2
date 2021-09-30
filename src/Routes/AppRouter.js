import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';
import ScanVoterCardFront from '../Screens/Validation/ScanVoterCard/ScanVoterCardFront';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/registration/onboarding/" component={Onboarding} />
      <Route exact path="/registration/validation/scan-voter-card-front" component={ScanVoterCardFront} />
      <Route path="/home" component="Home" />
    </Switch>
  </Router>
);

export default AppRouter;
