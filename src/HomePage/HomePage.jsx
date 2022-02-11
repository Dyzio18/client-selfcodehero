import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { gameActions } from '../_actions';
import { AddGame } from './AddGame';

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
    if (data && data.length > 0) {
      gameList = data.map((elem, i) => {
        return (
          <div className="card mb-3 col-sm-12 col-md-6 col-lg-4" key={`game-id-${i}`} style={{ maxWidth: '290px' }}>
            <div className="card-body ">
              <h4 className="card-title">{elem.name || 'none'}</h4>

              <h6 className="card-subtitle mb-2 text-muted">
                {elem.missions.length} Missions ⛳ <br />
                {elem.badges.length} Badges 🎖 <br />
                {elem.players.length} Players 🦹‍♂️
              </h6>

              <p className="card-text">{elem.desc}</p>
              <Link to={`/game/${elem.id}`} className="card-link btn btn-outline-info">
                join game
              </Link>
              <a href="#" className="card-link">
                delete
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <h2>Current games</h2>
        <div className="row d-flex flex-row justify-content-between flex-wrap">{gameList}</div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h1>Hi {user.name}!</h1>
          <p>You are logged in </p>

          <Link to="/login">Logout</Link>
        </div>
        <div className="col-lg-8">
          {users.loading && <em>Loading user...</em>}
          {users.error && <span className="text-danger">ERROR: {users.error}</span>}

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
              {/* <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p> */}
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
      </div>{' '}
      {/* row */}
    </div>
  );
}

export { HomePage };
