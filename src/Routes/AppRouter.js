import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';
import PhoneNumber from '../Screens/Onboarding/PhoneNumber/PhoneNumber';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/registration/onboarding/" component={Onboarding} />
      <Route path="/registration/onboarding/phonenumber" component={PhoneNumber} />
    </Switch>
  </Router>
);

export default AppRouter;
