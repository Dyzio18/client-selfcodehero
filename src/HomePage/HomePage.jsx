import React, { useEffect } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../_helpers';

import { gameActions } from '../_actions';
import { AddGame } from '../AddGamePage/AddGame';
import { UserProfile } from './UserProfile';
import { BoardView } from './';

function HomePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user.user);
  const games = useSelector((state) => state.games.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.getAll());
  }, []);

  //   function handleDeleteUser(id) {
  //     dispatch(userActions.delete(id));
  //   }

  const filterMyGames = (data) => {
    if (!data && !data[0]) return;
    const arr = data.filter((elem) => {
      return elem.owners && elem.owners.includes(user.id);
    });
    return arr;
  };

  const displayGames = (data) => {
    let gameList = <>Empty</>;


    let fakeImg = ['/assets/images/vectors/Cat-photo.png', '/assets/images/vectors/Cat-lick.png', '/assets/images/vectors/Cat-sleep.png', '/assets/images/vectors/Plants.png', '/assets/images/vectors/Summer.png', '/assets/images/vectors/Listen-podcast.png']

    if (data && data.length > 0) {
      gameList = data.map((elem, i) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4" key={`game-id-${i}`}>
            <div className='card mb-3' style={{ maxWidth: '290px' }}>
              <img src={fakeImg[i % 5]} className='card-img-top' />
              <div className="card-body ">
                <h4 className="card-title">{elem.name || 'none'}</h4>
                <p className="card-text">{elem.desc}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Missions <span className="badge bg-primary rounded-pill"> {elem.missions.length} </span>
                </li>
                <li className="list-group-item">
                  Badges <span className="badge bg-primary rounded-pill"> {elem.badges.length} </span>
                </li>
                <li className="list-group-item">
                  Players <span className="badge bg-primary rounded-pill"> {elem.players.length} </span>
                </li>
              </ul>
              <div className="card-body">
                <Link to={`/game/${elem.id}`} className="card-link btn btn-outline-info">
                  join game
                </Link>
                <a href="#" className="card-link">
                  delete
                </a>
              </div>

            </div>
          </div>
        );
      });
    }

    const pagination = () => {
      return (
        <div>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">&laquo;</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">4</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">5</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      )
    }

    return (
      <div>
        {/* <h2>Current games</h2> */}
        {(data && data.length > 8 ? pagination() : '')}
        <div className="d-flex gx-5 flex-row justify-content-start flex-wrap">{gameList}</div>
      </div>
    );
  };

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
                <h1>Dashboard</h1>
              </Route>
              <Route path={`/home/board`}>

                <BoardView />

                <div className='games-wrapper row'>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link active h2" data-bs-toggle="tab" href="#mygames">
                        My games
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link h2" data-bs-toggle="tab" href="#allgames">
                        All games
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link h2" data-bs-toggle="tab" href="#addgame">
                        Add game
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        settings
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Add action
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          My badges
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">
                          About project
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div id="myTabContent" className="tab-content mt-3">
                    <div className="tab-pane fade active show" id="mygames">
                      {games ? displayGames(filterMyGames(games)) : ''}
                    </div>
                    <div className="tab-pane fade" id="allgames">
                      {games ? displayGames(games) : ''}
                    </div>
                    <div className="tab-pane fade" id="addgame">
                      <section>
                        <AddGame />
                      </section>
                    </div>
                  </div>
                </div>
              </Route>
              <Route path={`/home/creator`}>
                <h1>Game creator</h1>
                <h3 className='lead'> Add and manage your games</h3>
              </Route>
              <Route path={'/home/settings'}>
                <h1>Settings</h1>
                <h3 className='lead'> Change your account settings</h3>
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
