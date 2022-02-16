import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from '../_helpers';

import { DashboardView, UserProfile, BoardView, SettingsView } from './';
import { GameCreatorPage } from '../GameCreatorPage';

function HomePage() {
  const users = useSelector((state) => state.users);
  // const user = useSelector((state) => state.authentication.user.user);

  return (
    <Router history={history}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
            <UserProfile />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 pt-3">
            <Switch>
              <Route exact path={'/home/'}>
                <DashboardView />
              </Route>
              <Route path={`/home/board`}>
                <BoardView />
              </Route>
              <Route path={`/home/creator/:id`}>
                <GameCreatorPage />
              </Route>
              <Route path={`/home/creator/`}>
                <GameCreatorPage />
              </Route>
              <Route path={'/home/settings'}>
                <SettingsView />
              </Route>
            </Switch>

            {users.loading && <em>Loading user...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}

          </div>
        </div>{' '}
        {/* row */}
      </div>
    </Router>

  );
}

export { HomePage };
