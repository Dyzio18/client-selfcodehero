import React from 'react';

function WelcomePage() {

  return (
    <div className="content">
      <div className="container">
        <div className="alert alert-dismissible alert-warning">
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          <h4 className="alert-heading">Work in progress!</h4>
          <p className="p-1">
            Come back here in a while. You can follow project on{' '}
            <a href="https://github.com/dyzio18/selfcodehero">github.com/dyzio18/selfcodehero</a>.
          </p>
        </div>
        <div className="jumbotron">
          <div className="row">
            <div className="col-xl-4 col-lg-6  col-md-8 col-sm-12 pt-lg-5 pt-2">
              <h1>Make your own gamification system from&nbsp;scratch</h1>
              <p>
                Easy to integrate and customize, engage user with gamification engine via REST API. See project{' '}
                <a href="https://github.com/dyzio18/selfcodehero">repository</a>.
              </p>
              <div className="row ">
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-between">
                  <a href="/home" type="button" className="btn btn-primary">
                    Play demo game
                  </a>
                  <button type="button" className="btn btn-outline-primary ">
                    Docs
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-xl-4 col-md-4 offset-lg-2 col-sm-12">
              <img className="img-fluid rounded mx-auto" src="/assets/images/vectors/Summer.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-5">
        <h2 className="h1 mb-3">How it works?</h2>
        <div className="row">
          <div className="col-xl-4 col-xl-4 col-md-4 col-sm-12">
            <div className="card border-light mb-3">
              <div className="card-header">#1 Gamification</div>
              <div className="card-body">
                <h3 className="card-title">Engage your community</h3>
                <p className="card-text">
                  Gamification engine give you access to create and manage missions, badges and levels for your players.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-xl-4 col-md-4 col-sm-12">
            <div className="card border-light mb-3">
              <div className="card-header">#2 REST API</div>
              <div className="card-body">
                <h3 className="card-title">Easy to connect</h3>
                <p className="card-text">
                  Connect to the gamification system easily and quickly. Set up your own micro-service or use our API.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-xl-4 col-md-4 col-sm-12">
            <div className="card border-light mb-3">
              <div className="card-header">#3 Open-source</div>
              <div className="card-body">
                <h3 className="card-title">API & demo game</h3>
                <p className="card-text">
                  The project started in February 2022. The first milestone is the API and demo application launch. Stay up
                  to date and share your feedback with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-sm-12">
            <h2 className="h1">Get started</h2>
            <p>
              It easy! First download code from{' '}
              <a href="https://github.com/dyzio18/selfcodehero" target="_blank" rel="noreferrer">
                repository
              </a>
              . Make sure you have installed Node.js and NPM (or Yarn).
            </p>
            <pre className="border-0">
              <code>
                git clone https://github.com/dyzio18/selfcodehero.git <br />
                cd selfcodehero <br />
                rm -rf ./.git <br />
              </code>
            </pre>
            <p>Install the dependencies:</p>
            <pre className="border-0">
              <code>
                yarn install <br />
                # or <br />
                npm install <br />
              </code>
            </pre>
            <p>Set the environment variables:</p>
            <pre className="border-0">
              <code>
                cp .env.example .env <br />
                # open .env and modify the environment variables <br />
              </code>
            </pre>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-12">
            <img className="img-fluid" src="/assets/images/vectors/API.png" alt="Logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export { WelcomePage };
