import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GamePreview } from "./GamePreview";
import { useParams } from 'react-router-dom';
import { gameActions } from '../_actions';
import { PageTitle } from '../_components/'
import { SaveGame } from "./SaveGame";
import { UpdateGame } from "./UpdateGame";

function GameCreatorPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const game = useSelector((state) => state.games.currgame || {});
    const [name, setName] = useState(game && game.name ? game.name : '');
    const [desc, setDesc] = useState(game && game.desc ? game.desc : '');
    let editMode = id && game ? true : false;

    useEffect(() => {
        if (id && game && game.name === name) {
            dispatch(gameActions.getGame({ id }))
        } if (game) {
            setName(game.name);
            setDesc(game.desc);
        }
    }, [id, game]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name == 'name') {
            if (value.length > 64) {
                return;
            }
            setName(value);
        } else if (name == 'desc') {
            setDesc(value);
        }

        dispatch(gameActions.editGame({ [name]: value }));
    }

    return (
        <div className="container-fluid">
            <PageTitle title={editMode ? `🛠 Edit game:  ${game.name || ''}` : '🆕 Create new game'} breads={[
                { title: '🏡', link: '/home' },
                { title: 'Creator' },
                { title: editMode ? 'edit' : 'new game', active: true }
            ]} />
            <div className="row mt-5">
                {/* <p className="text-warning">
                    name: {name} <br /> desc: {desc} <br />
                    {game.name} @ {game.desc}
                </p> */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="lead">Name and describe game</h3>
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input
                                name="name"
                                type="text"
                                onChange={handleInput}
                                className="form-control"
                                id="nameGameInput"
                                placeholder="max 64 chars"
                                value={name || ''}
                            />
                            <label htmlFor="nameGameInput">Game name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="desc"
                                onChange={handleInput}
                                type="text"
                                className="form-control"
                                id="descGameInput"
                                placeholder="Short description"
                                value={desc || ''} />
                            <label htmlFor="descGameInput">Short description</label>
                        </div>
                        <h3 className="lead mt-3">Choose game settings</h3>
                        <div className="form-group">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                    Public game
                                    <p className="text-success">You can share the game with your friends via link</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 pb-3 ">
                        <h3>Campaign creator</h3>
                        <button className="btn btn btn-outline-info">Setting</button>
                        <button className="btn btn btn-outline-info">Missions</button>
                        <button className="btn btn btn-outline-info">Badges</button>
                        <button className="btn btn btn-outline-info">Players</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="pt-1">
                        {editMode ? <UpdateGame /> : <SaveGame />}
                        <GamePreview />
                        {/* <AddGame /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export { GameCreatorPage };