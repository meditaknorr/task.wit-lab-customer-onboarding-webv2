import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DispatchContext } from '../Contexts/AppStoreContexts';
import { whitelist } from '../Locales/whitelist';
import Onboarding from '../Screens/Onboarding/Onboarding';

const AppRouter = () => {
  const dispatch = useContext(DispatchContext);

  /**
   * Language White List Checker
   * >> Determines if the detected language
   * Is available to be used on the app or not
   * Return detected browser language or the default 'eng' language
   * @param browserLanguage
   * @returns string
   */
  const whitelistChecker = (browserLanguage) => {
    const result = whitelist.filter((data) => (data === browserLanguage));
    return (result[0] ? browserLanguage : 'en');
  };

  useEffect(() => {
    dispatch(
      {
        type: 'CHANGE_APP_LANGUAGE',
        payload: {
          language: whitelistChecker((window.navigator.language).slice(0, 2)),
          id: 1,
        },
      },
    );
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
