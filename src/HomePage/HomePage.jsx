import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, gameActions } from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const games = useSelector(state => state.games.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(gameActions.getAll());

        // console.log(this.state.games)
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }
    const clg = (data) => {

        const gameList = data.results.map((elem, i) => {
            return (
                <tr class="table-active" key={`game-id-${i}`}>
                    <th scope="row">{elem.name}</th>
                    <td>{elem.badges.length}</td>
                    <td>{elem.missions.length}</td>
                    <td>{elem.players.length}</td>
                </tr>

            )
        });

        return (
            <div>
                <h2>Games</h2>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Badges</th>
                            <th scope="col">Missions</th>
                            <th scope="col">Players</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameList}

                    </tbody>
                </table>

                <ul>
                </ul>
            </div>
        )
    };

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user.firstName}!</h1>
            <p>You're logged in </p>


            {games ? clg(games) : 'NO'}


            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {/* {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            } */}
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };