import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddGame } from "./AddGame";
import { useParams } from 'react-router-dom';
import { gameActions } from '../_actions';

function GameCreatorPage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const game = useSelector((state) => state.games.currgame);
    const editMode = id ? true : false;

    useEffect(() => {
        dispatch(gameActions.getGame({ id }));
    }, [id]);

    return (
        <div className="container-fluid">
            <h1>Game creator</h1>
            <h3 className='lead'> Add and manage your games</h3>

            <div className="row mt-5">
                <div className="col-md-5 col-sm-12">
                    <h2>{editMode ? 'Edit game 🛠' : 'Create new game 🆕'}</h2>
                    {editMode && game && game.name && (<p className="text-muted h2">{game.name}</p>)}

                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Game name</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Short description</label>
                        </div>
                    </div>

                    <AddGame />
                </div>
                <div className="col-md-6 col-sm-12">

                </div>
            </div>
        </div>
    )
}

export { GameCreatorPage };