import React, { useEffect, useState } from 'react'
import { UserProfile } from '../_components/'

function Aside() {
    const [mobile, setMobile] = useState(false);

    useEffect(()=>{
        setMobile(window.matchMedia("(max-width: 768px)").matches);

    }, []);

    return (
        <div>
            <div className={`offcanvas offcanvas-start ${mobile ? 'w-75' : 'w-25'} bg-dark text-warning`} tabIndex="-1" id="offcanvas" data-bs-keyboard="true" data-bs-backdrop="true">
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h4>
                    <button type="button" className="btn btn-warning" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                </div>
                <div className="offcanvas-body px-0">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start text-warning" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-truncate text-warning">
                                <i className="fs-5 bi-house">🏡</i><span className="ms-1 d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
                                <i className="fs-5 bi-speedometer2">👑</i><span className="ms-1 d-sm-inline">Dashboard</span> </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <i className="fs-5 bi-table">🏅</i><span className="ms-1  d-sm-inline">Orders</span></a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-sm-inline">Games</span>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </li>

                        <UserProfile />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Aside }