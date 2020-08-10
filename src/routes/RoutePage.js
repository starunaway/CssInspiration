import React from 'react';

import {Redirect, Switch, Route} from 'react-router-dom';
import ROUTES from './routes';

export default () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route path={route.path} component={route.component} key={route.path} />
      ))}

      <Redirect to='/home'></Redirect>
    </Switch>
  );
};
