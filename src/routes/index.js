import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RoutePage from './RoutePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={RoutePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
