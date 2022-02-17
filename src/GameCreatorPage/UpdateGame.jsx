import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import {gameActions} from '../_actions';

function UpdateGame() {
    const { id } = useParams();
    const game = useSelector((store) => store.games.currgame)
    const dispatch = useDispatch();

    const updateGame = () => {
        const data = game;
        dispatch(gameActions.updateGame({id, data}));
    };

    return (
        <>
            <button className="btn btn-primary btn-lg" onClick={() => updateGame()}>
                Update game
            </button>
        </>
    )
}

export { UpdateGame }