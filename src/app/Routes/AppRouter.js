import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={"Onboard"} />
                <Route path={"/home"} component={"Home"} />
            </Switch>
        </Router>
    )
}