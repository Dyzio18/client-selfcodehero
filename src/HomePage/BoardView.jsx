import React, { useEffect } from "react"
import { gameActions } from '../_actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { PageTitle } from '../_components';


function BoardView() {
    const user = useSelector((state) => state.authentication.user.user);
    const myGames = useSelector((state) => state.games.mygames);
    const games = useSelector((state) => state.games.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(gameActions.getMyGames());
        dispatch(gameActions.getAll());
    }, [dispatch]);

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
                        <a className="page-link" href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        )
    }

    const displayGames = (data) => {
        let gameList = <>Empty</>;
        // let fakeImg = ['/assets/images/vectors/Cat-photo.png', '/assets/images/vectors/Cat-lick.png', '/assets/images/vectors/Cat-sleep.png', '/assets/images/vectors/Plants.png', '/assets/images/vectors/Summer.png', '/assets/images/vectors/Listen-podcast.png']
        if (data && data.length > 0) {
            gameList = data.map((elem, i) => {
                return (
                    <div className="col" key={`game-id-${i}`}>
                        <div className='card mb-3' style={{ maxWidth: '290px' }}>
                            {/* <img src={fakeImg[i % 5]} className='card-img-top' /> */}
                            <div className="card-body ">
                                <h4 className="card-title">{elem.name || 'none'}</h4>
                                <p className="card-text">{elem.desc}</p>

                                <span className="btn btn-dark m-1">
                                    Missions <span className="badge bg-dark"> {elem.missions.length}</span>
                                </span>
                                <span className="btn btn-dark m-1">
                                    Badges <span className="badge bg-primary"> {elem.badges.length}</span>
                                </span>
                                <span className="btn btn-dark m-1">
                                    Players <span className="badge bg-dark"> {elem.players.length}</span>
                                </span>
                            </div>

                            <div className="card-body ">
                                <Link to={`/game/${elem.id}`} className="d-block card-link btn btn-outline-info m-auto">
                                    join game
                                </Link>
                                {elem.owners && elem.owners.includes(user.id) && (
                                    <Link to={`/home/creator/${elem.id}`} className="mt-2 d-block  card-link btn btn-outline-danger m-auto">edit ⚙</Link>
                                )}
                            </div>

                        </div>
                    </div>
                );
            });
        }

        return (
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">{gameList}</div>
            </div>
        );
    };


    return (
        <div className="container-fluid">

            <PageTitle title="Games" lead={'Go to some adventure! 🗺 🐱‍🏍'} breads={[
                { title: '🏡', link: '/home' },
                { title: 'Games', active: true }
            ]} />

            <div className='games-wrapper row'>
                <div className="col-8">

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
                            <Link className="nav-link h2 btn" to={'/home/creator'}>
                                ➕ New game
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    {(games && games.length > 6 ? pagination() : '')}

                </div>
                <div id="myTabContent" className="tab-content mt-3">
                    <div className="tab-pane fade active show" id="mygames">
                        {myGames ? displayGames(filterMyGames(myGames)) : ''}
                    </div>
                    <div className="tab-pane fade" id="allgames">
                        {games ? displayGames(games) : ''}
                    </div>
                </div>
            </div>
        </div>
    )

}

export { BoardView }