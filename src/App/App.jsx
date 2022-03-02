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
import { Aside } from '../_components/Aside';

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

  return (<Router history={history}>

    <div className={gameMode ? 'app-wrapper' : 'page-wrapper'}>
      {!gameMode && <Navbar />}
      <div className="page-app">

        <Aside />
        <button className="btn float-end btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
          ❔
          <i className="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
        </button>

        {alert.message && (

          <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: '11', }}>
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header ">
                <strong className="me-auto">{alert.title}</strong>
                <small>1 mins ago</small>
                <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="toast-body">
                {alert.message}
              </div>
            </div>
          </div>

        )}
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <PrivateRoute path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/game/:id" component={GamePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
      {!gameMode && <Footer />}
    </div >
  </Router>
  );
}

export { App };
