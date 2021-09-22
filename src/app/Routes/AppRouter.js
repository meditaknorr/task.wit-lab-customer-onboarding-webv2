import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStore } from '../Hooks/useStore';
import { whitelist } from '../Locales/whitelist';
import Onboarding from '../Screens/Onboarding/Onboarding';

const AppRouter = () => {
  const { setLanguage } = useStore();

  /**
   * White List Checker That Determines if the detected language
   * Is available to be used on the app or not
   * Return detected browser language or the default 'eng' language
   * @param browserlanguage
   * @returns string
   */
  const whitelistChecker = (browserlanguage) => {
    const result = whitelist.filter((data) => (data === browserlanguage));
    return (result[0] ? browserlanguage : 'en');
  };

  useEffect(() => {
    setLanguage(whitelistChecker((window.navigator.language).slice(0, 2)));
  }, []);

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
