import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';
import PhoneNumber from '../Screens/Onboarding/PhoneNumber/PhoneNumber';
import PhoneNumberConfirmation from '../Screens/Onboarding/PhoneNumberConfirmation/PhoneNumberConfirmation';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/registration/onboarding/" component={Onboarding} />
      <Route exact path="/registration/onboarding/phonenumber" component={PhoneNumber} />
      <Route exact path="/registration/onboarding/phonenumber/confirmation" component={PhoneNumberConfirmation} />
    </Switch>
  </Router>
);

export default AppRouter;
