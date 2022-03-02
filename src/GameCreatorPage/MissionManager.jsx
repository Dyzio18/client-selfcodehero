import React, { useState } from 'react'
import Picker, { SKIN_TONE_NEUTRAL } from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { missionActions, alertActions } from '../_actions/';
import { MissionList } from '../_components';

export default function MissionManager() {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();

    const missions = useSelector((state) => state.games.currgame.missions);

    const onEmojiClick = (_e, emojiObject) => {
        setUrl(emojiObject.emoji);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        if (name == "name") setName(value);
        if (name == "desc") setDesc(value);
    }

    const resetForm = () => {
        setName('');
        setDesc('');
        setUrl('');
    }

    const saveMission = () => {
        const mission = { name, desc, url };
        dispatch(missionActions.addMission(mission));
        dispatch(alertActions.success(`You add new mission ${name}`, '🆕 New mission'));

        toggleEditMode();
        resetForm();
    }

    return (
        <>
            <div className="f-flex flex-row">
                {/* <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#missionCreatorModal">
                    Add Mission
                </button> */}
                <button type="button" className="btn btn-outline-primary" onClick={() => toggleEditMode()}>
                    Add mission
                </button>


                {/* <button onClick={() => toggleEditMode()}>Edit</button> */}
                <div className={editMode ? '' : 'd-none'} >
                    <div className="row m-3 p-3" style={{ background: 'navy', borderRadius: '10px' }}>
                        <div className="col-md-6 col-sm-12">
                            <div className='d-grid gap-2 d-md-block' style={{ textAlign: 'left', marginBottom: '10px' }}>
                                <button type="button" className="btn btn-danger m-1" onClick={() => toggleEditMode()}>Close</button>
                                <button type="button" className="btn btn-primary  m-1 " onClick={() => saveMission()} >Save mission</button>
                            </div>
                            <div className="form-group">
                                <h4>Mission story</h4>
                                <div className="form-floating col-6">
                                    <input
                                        value={name}
                                        type="text"
                                        name="name"
                                        className='form-control'
                                        id="missionname"
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor="missionname"> Mission name</label>
                                </div>
                                <div className="form-floating mt-2">
                                    <input
                                        value={desc}
                                        type="text"
                                        name="desc"
                                        className='form-control'
                                        id="missiondesc"
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor="missiondesc"> Mission description</label>
                                </div>
                                <div className="mt-2">
                                    <h4>Select icon</h4>
                                    <div>
                                        <Picker
                                            onEmojiClick={onEmojiClick}
                                            disableAutoFocus={true}
                                            skinTone={SKIN_TONE_NEUTRAL}
                                            pickerStyle={{
                                                padding: '10px',
                                                width: '100%',
                                                minHeight: '320px',
                                                backgroundColor: '#fff',
                                                boxShadow: 'none',
                                                border: 'none',
                                            }}
                                            groupNames={{ smileys_people: 'PEOPLE' }}
                                            native
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pt-xs-3 pt-sm-3">
                            {(url || name || desc) && (
                                <div className="card text-white bg-dark mb-3" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '10px', }}>
                                    <div className="card-body">
                                        <h2 className="card-title"> <span style={{ fontSize: '4rem' }}>{url}</span> {name}</h2>
                                        <p className="card-text">{desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div> {/* edit mission form */}

                <div className="row pb-3">
                    <MissionList list={missions} />
                </div>
            </div>
        </>
    )
}
