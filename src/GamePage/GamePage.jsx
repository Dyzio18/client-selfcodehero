import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { gameActions } from '../_actions';
import { BadgeList } from '../_components/BadgeList';

function GamePage() {
    const params = useParams();
    const dispatch = useDispatch();
    const game = useSelector((state) => state.games.currgame);

    useEffect(() => {
        dispatch(gameActions.getGame({ id: params.id }));
    }, [params.id]);

    if (!game) {
        return (
            <div className="container-fluid pt-5">
                <h1>Search game... 🌵</h1>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="card mt-5 mb-3" style={{ maxWidth: '400px' }}>
                        <h1 className="card-header">{game.name}</h1>
                        <div className="card-body">
                            <h5 className="card-subtitle">{game.desc}</h5>
                        </div>
                        <div className="card-body">
                            <Link to="/home" className="card-link">
                                Back to dashboard
                            </Link>
                            <Link to="/home" className="card-link">
                                exit game
                            </Link>
                        </div>
                        <div className="card-footer text-muted">
                            You join the game!
                            <br />
                            ID: <code>{params.id}</code>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 mt-5">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active h2" data-bs-toggle="tab" href="#game-missions">
                                Missions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h2" data-bs-toggle="tab" href="#game-badges">
                                Badges
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h2" data-bs-toggle="tab" href="#game-players">
                                Players
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
                                    Edit settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    Edit Game
                                </a>
                                <a className="dropdown-item" href="#">
                                    Edit Badges
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    About project
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div id="game-tab-content" className="tab-content mt-3">
                        <div className="tab-pane fade active show" id="game-missions">
                            <h1>MISSIONS</h1>
                            <p>
                                
                                <h2>MY MISSION 🎪</h2>
                            </p>
                        </div>
                        <div className="tab-pane fade" id="game-badges">
                            <div className="row">
                                {game.badges && <BadgeList list={game.badges} />}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="game-players">
                            <h1>PLAYERS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { GamePage };
