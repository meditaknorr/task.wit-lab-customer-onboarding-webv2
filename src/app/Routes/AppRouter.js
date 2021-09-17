import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStore } from '../Hooks/useStore';
import Onboarding from '../Screens/Onboarding/Onboarding';

const AppRouter = () => {
  const { setBrowserlanguage } = useStore();

  useEffect(() => {
    setBrowserlanguage(((window.navigator.language).slice(0, 2)).toUpperCase());
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Onboarding} />
        <Route path="/home" component="Home" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
