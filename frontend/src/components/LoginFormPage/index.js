import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Footer } from '../Footer';
import './Login.css';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
      <div className='top-bar'>

      </div>
      <div className='signup-page-container'>
        <div className="left-side">
          <div className='left-container'>
            <h2 className='signup-h2'>Log in to Welp</h2>
            <p className='signup-subheading'>New to Yelp? Sign up</p>
            <p className='signup-legal'>By logging in, you agree to Welp’s <a className='in-text-link'>Terms of Service</a> and <a className='in-text-link'>Privacy Policy.</a></p>
            <button type="submit" disabled='true' className='disabled-btn facebook'>Continue with Facebook</button>
            <button type="submit" disabled='true' className='disabled-btn google'>Continue with Google</button>
            <button type="submit" disabled='true' className='disabled-btn apple'>Continue with Apple</button>
            <fieldset className='line'>
              <legend className='or'>OR</legend>
            </fieldset>
            <form onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>

                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                  placeholder='Username or Email'
                  className='signup-input'

                />


                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Password'
                  className='signup-input'
                />

              <button className='signup-btn' type="submit">Log In</button>
              <p className='bottom-text'>New to Welp? <a className='in-text-link'>Sign up</a></p>
            </form>
          </div>

        </div>
        <div className='right-side'>
          <img className='signup-img' src='https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png'/>
        </div>

      </div>
      <Footer />
    </>

  );
}

export default LoginFormPage;
