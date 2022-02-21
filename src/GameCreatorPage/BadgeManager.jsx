import React, { useState } from 'react'
import Picker, { SKIN_TONE_NEUTRAL } from 'emoji-picker-react';

export default function BadgeManager() {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [url, setUrl] = useState('')

    const onEmojiClick = (e, emojiObject) => {
        setUrl(emojiObject.emoji);
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        if (name == "name") setName(value);
        if (name == "desc") setDesc(value);
    }

    return (
        <>
            <div className="f-flex flex-row">

                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#badgeCreatorModal">
                    Add Badge
                </button>

                <div className="modal fade" id="badgeCreatorModal" tabIndex="-1" aria-labelledby="badgeCreatorModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="badgeCreatorModalLabel">🆕 Badge creator</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                {(url || name || desc) && (
                                    <div className="card text-white bg-dark mb-3" style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
                                        <div className="card-body">

                                            <h1 className="card-title"> <span style={{ fontSize: '4rem' }}>{url}</span> {name}</h1>
                                            <p className="card-text">{desc}</p>
                                        </div>
                                    </div>
                                )}


                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <h4>Badge story</h4>
                                    <div className="form-floating col-6">
                                        <input
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
                                            type="text"
                                            name="desc"
                                            className='form-control'
                                            id="badgedesc"
                                            onChange={onInputChange}
                                        />
                                        <label htmlFor="badgedesc"> Badge description</label>
                                    </div>
                                    <div className="mt-2">
                                        <h4>Pick Emoji</h4>
                                        <Picker
                                            onEmojiClick={onEmojiClick}
                                            disableAutoFocus={true}
                                            skinTone={SKIN_TONE_NEUTRAL}
                                            pickerStyle={{ width: '100%' }}
                                            groupNames={{ smileys_people: 'PEOPLE' }}
                                            native
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Save badge</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
