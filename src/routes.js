import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppFrame from './components/AppFrame';
import Login from './containers/Login';

export default (
  <Route path="/" component={AppFrame}>
    <IndexRoute component={Login}/>
  </Route>
);