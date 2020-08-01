import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Onboarding } from './containers';
import { NotFoundView } from './views';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/onboarding" />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="*" component={NotFoundView} />
    </Switch>
  </BrowserRouter>
);

export default App;
