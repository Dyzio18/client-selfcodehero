import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, gameActions } from '../_actions';

function AddGame() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user.user);
    const games = useSelector(state => state.games.data);
    const jsonEditorRef = useRef();

    const dispatch = useDispatch();

    const [game, setGame] = useState({});

    useEffect(() => {
        if (game) {
            console.log("GAME")
            setGame(basicGame());
        }
    }, []);


    const displayUser = () => {
        console.log(user)
    };

    const basicGame = () => {
        return {
            name: "Basic Game",
            email: user.email,
            desc: "lorem ipsum",
            badges: [
                {
                    "name": "randomWords",
                    "desc": "randomLoremWords",
                    "url": "https:/google.com",
                    "data": {
                        "btc": 999,
                    }
                }
            ],
        };
    }

    const editorGame = (e) => {
        let editorGame;
        try {
            editorGame = JSON.parse(e.target.value)
            setGame(editorGame);
        } catch (error) {
            console.error(error)
            return false;
        }
    }

    const createGame = (data) => {
        let obj = game;
        Object.assign(obj, data)
        setGame(obj)
        jsonEditorRef.current.value = JSON.stringify(game, null, 2);
        return obj;
    }

    const saveGame = () => {
        let data = game;
        dispatch(gameActions.addGame(data));
    }


    return (
        <div className="col-lg-12">
            <h1>Hi {user.name}!</h1>
            <div className="row">
                <div className="col-lg-4">
                    <button className='btn btn-outline-primary' onClick={() => displayUser()}>Show me</button>
                </div>
                <div className="col-lg-4">
                    <button className='btn btn-outline-primary' onClick={() => createGame({ name: "Habits Rutine" })}>Habits</button>
                    <button className='btn btn-outline-primary' onClick={() => createGame({ name: "Sport Template" })}>Sport</button>
                    <button className='btn btn-outline-primary' onClick={() => setGame(createGame({ name: "Team Game" }))}>Team Game</button>
                </div>
                <div className="col-lg-4 d-flex justify-content-end">
                    <button className='btn btn-primary' onClick={() => saveGame()}>Add new game</button>
                </div>
            </div>
            <div className="row mt-3">
                <h3>Dev editor</h3>
                <textarea ref={jsonEditorRef} id="noter-text-area" name="textarea" value={JSON.stringify(game, null, 2)} cols="50" rows="10" onChange={editorGame} />

                {/* <pre>
                    {JSON.stringify(game, null, 2)}
                </pre> */}
            </div>
            

            {/* <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">Your game was added </strong>
                    <small>1 mins ago</small>
                    <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="toast-body">
                    You add game with success   
                </div>
            </div> */}

        </div>
    );
}

export { AddGame };