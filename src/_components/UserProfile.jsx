import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function UserProfile() {
    const user = useSelector((state) => state.authentication.user.user);

    
    if (!user) {
        return (
            <div className='d-flex justify-content-center m-auto mb-4 mt-4'>
                <div className="card border-primary " style={{ minWidth: '220px', maxWidth: '90%' }}>
                    <div className="card-body">
                        <h1> Please <Link to={'/login'}>login</Link> 🧐</h1>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className='d-flex justify-content-center m-auto mb-4 mt-4'>
            <div className="card border-primary " style={{ minWidth: '220px', maxWidth: '100%' }}>
                <div className="card-body">
                    <h5 className="card-title">Hi {user.name}!</h5>
                    <p className="card-text">
                        Welcome 👋  in selfcodehero! <br/>
                        Create you own game or join an existing one. 
                    </p>
                </div>
                <div className="list-group">
                    <Link to={'/home/'} className="list-group-item list-group-item-action">Dashboard</Link>
                    <Link to={'/home/board'} className="list-group-item list-group-item-action">My games</Link>
                    <Link to={'/home/creator'} className="list-group-item list-group-item-action">Game creator</Link>
                    <Link to={'/home/settings'} className="list-group-item list-group-item-action ">Settings</Link>
                </div>
                <div className="card-body">
                    <Link to={'/'} className="card-link">Help</Link>
                    <Link to={'/logout'} className="card-link">Logout</Link>
                </div>
            </div>
        </div>
    )
}

export { UserProfile }