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
   * @param browserlanguage
   * @returns string
   */
  const whitelistChecker = (browserlanguage) => {
    const result = whitelist.filter((data) => (data === browserlanguage));
    return (result[0] ? browserlanguage : 'en');
  };

  useEffect(() => {
    dispatch(
      {
        type: 'REMOVE_STATE',
        payload: {
          id: 1,
        },
      },
    );
    dispatch(
      {
        type: 'ADD_STATE',
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
