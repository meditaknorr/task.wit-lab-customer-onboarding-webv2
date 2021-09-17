import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Onboarding} />
        <Route path="/home" component="Home" />
      </Switch>
    </Router>
  );
}
