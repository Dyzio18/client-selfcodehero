import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function LoginPage() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: '/home' } };
      dispatch(userActions.login(email, password, from));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 ">
          <h2>Login</h2>
          <form name="form" className="mb-3 mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                className={`form-control${submitted && !email ? ' is-invalid' : ''}`}
              />
              {submitted && !email && <div className="invalid-feedback">Email is required</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className={`form-control${submitted && !password ? ' is-invalid' : ''}`}
              />
              {submitted && !password && <div className="invalid-feedback">Password is required</div>}
            </div>
            <div className="form-group mb-3 mt-3">
              <button className="btn btn-primary">
                {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Login
              </button>
              <Link to="/register" className="btn btn-link">
                Register
              </Link>
            </div>
          </form>
          <p>
            To enter the game, please register and log into your account.
            <br />
            It is demo version still under the development.
          </p>
        </div>
        <div className="col-lg-4 offset-lg-2 col-sm-12 ">
          <img className="img-fluid rounded mx-auto" src="/assets/images/vectors/Box-moving.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
