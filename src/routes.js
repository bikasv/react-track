import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Result from './Result';
import UsersRoutes from './UsersRoutes';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/result' component={Result} />
      <Route path='/user' component={UsersRoutes} />
    </Switch>
  </HashRouter>
);

export default Routes;
