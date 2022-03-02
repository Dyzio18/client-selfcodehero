import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GamePreview } from "./GamePreview";
import { useParams } from 'react-router-dom';
import { gameActions } from '../_actions';
import { PageTitle } from '../_components/'
import { SaveGame } from "./SaveGame";
import { UpdateGame } from "./UpdateGame";
import BadgeManager from "./BadgeManager";
import MissionManager from "./MissionManager";

function GameCreatorPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const game = useSelector((state) => state.games.currgame || {});
    const [name, setName] = useState(game && game.name ? game.name : '');
    const [desc, setDesc] = useState(game && game.desc ? game.desc : '');
    // const [settings, setSettings] = useState(game && game.settings ? game.settings : {});
    const [loadGameFlag, setLoadGameFlag] = useState(false);
    let editMode = id && game ? true : false;

    useEffect(() => {
        if (id && game && game.name === name && loadGameFlag === false) {
            dispatch(gameActions.getGame({ id }))
            setLoadGameFlag(true);
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

    const handleSettingsPublic = (e) => {
        // console.log(e.target.checked);
        dispatch(gameActions.editGame({ settings: { public: e.target.checked } }));
    }

    return (
        <div className="container-fluid">
            <PageTitle title={editMode ? `🛠 Edit game:  ${game.name || ''}` : '🆕 Create new game'} breads={[
                { title: '🏡', link: '/home' },
                { title: 'Creator' },
                { title: editMode ? 'edit' : 'new game', active: true }
            ]} />
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="lead">Game story</h3>
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
                        <h3 className="lead mt-3">Game settings</h3>
                        <div className="form-group">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                    onChange={handleSettingsPublic}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                    Public game
                                    <p className="text-success">You can share the game with your friends via link</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="pt-1">
                        {editMode ? <UpdateGame /> : <SaveGame />}
                        <GamePreview />
                    </div>
                </div>
            </div>

            <div className="row pt-4 pb-3 ">
                <div className="col">
                    <div className="mt-2 mb-4">
                        <h2>Missions</h2>
                        <MissionManager />
                    </div>

                    <div className="mt-2 mb-4">
                        <h2>Badges</h2>
                        <BadgeManager />
                    </div>

                    <div className="mt-2 mb-4">
                        <h2>Players</h2>
                        <button className="btn btn btn-outline-info">Manage Player</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { GameCreatorPage };