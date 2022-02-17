import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {gameActions} from '../_actions';

function SaveGame() {
    const game = useSelector((store) => store.games.currgame)
    const dispatch = useDispatch();

    const saveGame = () => {
        const data = game;
        dispatch(gameActions.addGame(data));
    };

    return (
        <>
            <button className="btn btn-primary btn-lg" onClick={() => saveGame()}>
                Save game
            </button>
        </>
    )
}

export { SaveGame }