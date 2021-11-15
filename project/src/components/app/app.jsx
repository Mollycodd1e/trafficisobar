import React from 'react';
import {AppRoute} from '../../const.js';
import Main from '../main/main.jsx';
import {Switch, Route} from 'react-router-dom';
import Example from '../example/example.jsx';

function App() {

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <Main />
      </Route>
      <Route exact path={AppRoute.EXAMPLE}>
        <Example/>
      </Route>
    </Switch>
  );
}

export default App;
