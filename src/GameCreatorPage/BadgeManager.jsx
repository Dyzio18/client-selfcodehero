import React, { useState } from 'react'
import Picker, { SKIN_TONE_NEUTRAL } from 'emoji-picker-react';
import { BadgeList } from '../_components/BadgeList';
import { useDispatch, useSelector } from 'react-redux';
import { badgeActions, alertActions } from '../_actions/';

export default function BadgeManager() {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();

    const badges = useSelector((state) => state.games.currgame.badges);

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

    const saveBadge = () => {
        const badge = { name, desc, url };
        dispatch(badgeActions.addBadge(badge));
        dispatch(alertActions.success(`You add new badge ${name}`, '🆕 New badge'));

        toggleEditMode();
        resetForm();
    }

    return (
        <>
            <div className="f-flex flex-row">
                {/* <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#badgeCreatorModal">
                    Add Badge
                </button> */}
                <button type="button" className="btn btn-outline-primary" onClick={() => toggleEditMode()}>
                    Add badge
                </button>


                {/* <button onClick={() => toggleEditMode()}>Edit</button> */}
                <div className={editMode ? '' : 'd-none'} >
                    <div className="row m-3 p-3" style={{ background: 'navy', borderRadius: '10px' }}>
                        <div className="col-md-6 col-sm-12">
                            <div className='d-grid gap-2 d-md-block' style={{ textAlign: 'left', marginBottom: '10px' }}>
                                <button type="button" className="btn btn-secondary m-1" onClick={() => toggleEditMode()}>Close</button>
                                <button type="button" className="btn btn-success m-1 " onClick={() => saveBadge()} >Save badge</button>
                            </div>
                            <div className="form-group">
                                <h4>Badge story</h4>
                                <div className="form-floating col-6">
                                    <input
                                        value={name}
                                        type="text"
                                        name="name"
                                        className='form-control'
                                        id="badgename"
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor="badgename"> Badge name</label>
                                </div>
                                <div className="form-floating mt-2">
                                    <input
                                        value={desc}
                                        type="text"
                                        name="desc"
                                        className='form-control'
                                        id="badgedesc"
                                        onChange={onInputChange}
                                    />
                                    <label htmlFor="badgedesc"> Badge description</label>
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
                </div> {/* edit badge form */}

                <div className="row pt-3">
                    <BadgeList list={badges} />
                </div>
            </div>
        </>
    )
}
