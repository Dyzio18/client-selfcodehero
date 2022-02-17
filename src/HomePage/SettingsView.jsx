import React from "react"
import {PageTitle} from '../_components';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from "react-router-dom";


function SettingsView() {
    // const user = useSelector((state) => state.authentication.user.user);
    // const games = useSelector((state) => state.games.data);
    // const dispatch = useDispatch();

    return (
        <div className="container-fluid">
            <PageTitle title="Settings" lead={'Change your account settings 🛠'} breads={[
                { title: '🏡', link: '/home' },
                { title: 'Settings', active: true }
            ]} />

        </div>
    )

}

export { SettingsView }