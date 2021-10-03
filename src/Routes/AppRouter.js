import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding/Onboarding';
import PhoneNumber from '../Screens/Onboarding/PhoneNumber/PhoneNumber';
import PhoneNumberConfirmation from '../Screens/Onboarding/PhoneNumberConfirmation/PhoneNumberConfirmation';
import ScanVoterCardFront from '../Screens/Validation/ScanVoterCard/ScanVoterCardFront';
import ScanVoterCardBack from '../Screens/Validation/ScanVoterCard/ScanVoterCardBack';
import Selfie from '../Screens/Validation/Selfie/Selfie';
import Details from '../Screens/Details/Details';
import AditionalInformation from '../Screens/Details/AdditionalInformation/AdditionalInformation';
import Confirmation from '../Screens/Details/Confirmation/Confirmation';
import RegistrationStatus from '../Screens/Status/Status';
import RegistrationSuccessful from '../Screens/Status/Successful/RegistrationSuccessful';
import RegistrationUnsuccessful from '../Screens/Status/Unsuccessful/RegistrationUnsuccessful';
import Validation from '../Screens/Validation/Validation';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/registration/onboarding/" component={Onboarding} />
      <Route exact path="/registration/onboarding/phonenumber" component={PhoneNumber} />
      <Route exact path="/registration/onboarding/phonenumber/confirmation" component={PhoneNumberConfirmation} />

      <Route exact path="/registration/validation/scan/front" component={ScanVoterCardFront} />
      <Route exact path="/registration/validation/scan/back" component={ScanVoterCardBack} />
      <Route exact path="/registration/validation/selfie" component={Selfie} />
      <Route exact path="/registration/validation" component={Validation} />

      <Route exact path="/registration/details" component={Details} />
      <Route exact path="/registration/details/additionalinformation" component={AditionalInformation} />
      <Route path="/registration/details/confirmation" component={Confirmation} />

      <Route exact path="/registration/status" component={RegistrationStatus} />
      <Route exact path="/registration/status/successful" component={RegistrationSuccessful} />
      <Route exact path="/registration/status/unsuccessful" component={RegistrationUnsuccessful} />
    </Switch>
  </Router>
);

export default AppRouter;
