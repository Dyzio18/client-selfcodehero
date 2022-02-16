import React from "react"
import { Link } from "react-router-dom"

function DashboardView() {

    return (
        <div className="container-fluid">
            <h1>Dashboard</h1>
            <h3 className='lead'> Now, you are superhero! 🐱‍🏍</h3>
            <div className="container">
                <div className="row justify-content-start mt-5">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">Game creator</div>
                            <div className="card-body">
                                <h1 className="card-title">➕ Add game</h1>
                                <p className="card-text">
                                    Create and manage games. Build new game for you or society.
                                    Have fun and develop.
                                </p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-outline-info" to={'/home/creator'}>Go to</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card border-primary mb-3">
                            <div className="card-header"> See all available games</div>
                            <div className="card-body">
                                <h1 className="card-title">⚜ My games</h1>
                                <p className="card-text">See all available games. See the games you participate in.</p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-outline-info" to={'/home/board'}>Go to</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card border-primary mb-3">
                            <div className="card-header">Check my account</div>
                            <div className="card-body">
                                <h1 className="card-title">💬 Settings</h1>
                                <p className="card-text">Change your account settings and manage the main profile.</p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-outline-info" to={'/home/settings'}>Go to</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DashboardView }