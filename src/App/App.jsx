import React, { useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, Navbar, Footer } from '../_components';
import { WelcomePage } from '../WelcomePage';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { GamePage } from '../GamePage';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const [gameMode, setGameMode] = useState(false);

  useEffect(() => {
    // on location change
    // eslint-disable-next-line no-unused-vars
    history.listen((location, action) => {
      location.pathname.indexOf('/game') >= 0 ? setGameMode(true) : setGameMode(false);
      dispatch(alertActions.clear());
    });
  }, [gameMode]);

  return (
    <div className={gameMode ? 'app-wrapper' : 'page-wrapper'}>
      {!gameMode && <Navbar />}
      <div className="page-app">
        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <PrivateRoute path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/game/:id" component={GamePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
      {!gameMode && <Footer />}
    </div>
  );
}

export { App };
