import React from 'react';
import Onboarding from '../Screens/Onboarding/Onboarding';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Onboarding} />
                <Route path={"/home"} component={"Home"} />
            </Switch>
        </Router>
    )
}