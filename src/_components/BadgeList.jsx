import React from 'react'
import PropTypes from 'prop-types'
import { alertActions, badgeActions } from '../_actions';
import { useDispatch } from 'react-redux';

function BadgeItem({ name, desc, url, hash }) {
    const dispatch = useDispatch();

    const deleteBadge = () => {
        dispatch(badgeActions.deleteBadge(hash))
        dispatch(alertActions.success(`You delete badge ${name}`, '❌ Delete badge'));
    }

    return (
        <div className="col" data-badge-id={hash}>
            <div className={`card h-100 border-${hash ? 'primary' : 'success'}`}>
                <div className="card-header">
                    <span style={{
                        position: 'absolute', top: '-25px', left: '-25px',
                        fontSize: '2.4rem', borderRadius: '40px',
                        boxShadow: '0 0 2px rgb(111 66 193 / 90%), 0 0 4px rgb(111 66 193 / 40%), 0 0 1rem rgb(111 66 193 / 30%), 0 0 4rem rgb(111 66 193 / 10%)',
                        zIndex: '11',
                    }}>
                        {url || ''}
                    </span>
                    <h3 style={{ paddingLeft: '10px', paddingTop: '10px', paddingRight: '10px' }}> {name || ''}</h3>

                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown" style={{
                        position: 'absolute',
                        top: '-1px',
                        right: '-1px',
                    }}>
                        {hash && (
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" >
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <button className="btn dropdown-item" onClick={() => deleteBadge()}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className="card-body">
                    <p className="card-text">{desc || ''}</p>
                </div>
                <div className="card-footer text-muted small">
                    {hash || 'badge not saved'}
                </div>
            </div>
        </div>
    )
}

function BadgeList({ list }) {
    if (!list || list.length === 0) return (<> </>);

    const badgeList = list.map((elem, i) => <BadgeItem key={i} name={elem.name} desc={elem.desc} url={elem.url} hash={elem.hash || ''}/>)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-5">
            {badgeList}
        </div>
    )
}

BadgeList.propTypes = {
    list: PropTypes.array,
}

BadgeItem.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    url: PropTypes.string,
    hash: PropTypes.string,
    keyCount: PropTypes.number,
}

export { BadgeList }
