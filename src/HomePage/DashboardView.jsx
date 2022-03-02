import React from "react"
import { Link } from "react-router-dom"
import { PageTitle } from '../_components/'

function DashboardView() {

    return (
        <div className="container-fluid">

            <PageTitle title="Dashboard" lead={'Now, you are superhero! 🐱‍🏍'} breads={[
                { title: '🏡', link: '/home' },
                { title: 'Dashboard', active: true }
            ]} />

            <div className="container">
                <div className="row justify-content-start mt-5">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card border-primary mb-3">
                            <div className="card-header h5"> ⚜ My games</div>
                            <div className="card-body">
                                <p className="card-text">See all available games. See the games you participate in.</p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-outline-info" to={'/home/board'}>See games 👀</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card border-secondary mb-3">
                            <div className="card-header h5">➕ Game creator</div>
                            <div className="card-body">
                                <p className="card-text">
                                    Create and manage games. Build new game for you or society.
                                    Have fun!
                                </p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-outline-info h2" to={'/home/creator'}>Add game ➕</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card border-primary mb-3">
                            <div className="card-header h5">💬 Settings</div>
                            <div className="card-body">
                                <p className="card-text">Change your account settings and manage the main profile.</p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-outline-info" to={'/home/settings'}>Change settings 💬 </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DashboardView }