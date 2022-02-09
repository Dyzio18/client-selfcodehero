import React from 'react';

const Footer = () => {
    return (
        <div className='footer container pb-5 mt-5 pt-3 border-top'>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>selfcodehero.com</h3>
                    <p className='lead'><a href="https://github.com/dyzio18/selfcodehero">Open-source</a> project <br/> to create gamification system.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>Help</h3>
                    <ul>
                        <li>Documentation</li>
                        <li>FAQ</li>
                        <li>Use cases</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>Resources</h3>
                    <ul>
                        <li>Gamification</li>
                        <li>Blog</li>
                        <li>Contribution</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { Footer };