import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

const Navbar = () => {

  const loggedIn = useSelector((store) => store.authentication.loggedIn);

  return (
    <div className="header p-3">
      <nav className="navbar navbar-dark navbar-expand-lg shadow-lg mb-2 rounded">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            SELFCODEHERO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Documentation
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            <form className="d-flex">
              {loggedIn ? (
                <a className="btn btn-primary" href="/home">
                  Account
                  <span className="visually-hidden">(current)</span>
                </a>
              ) : (
                  <a className="btn btn-primary" href="/login">
                    Login
                    <span className="visually-hidden">(current)</span>
                  </a>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
