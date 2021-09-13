import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <div className='top-bar'>

      </div>
      <div className='signup-page-container'>
        <div className="left-side">
          <h2 className='signup-h2'>Sign Up for Welp</h2>
          <p className='signup-subheading'>Connect with great local businesses</p>
          <p className='signup-legal'>By continuing, you agree to Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.</p>
          <button type="submit" disabled='true' className='disabled-btn facebook'>Continue with Facebook</button>
          <button type="submit" disabled='true' className='disabled-btn google'>Continue with Google</button>
          <button type="submit" disabled='true' className='disabled-btn apple'>Continue with Apple</button>
          <p className='signup-legal'>Don't worry, we never post without your permission.</p>
          <fieldset className='line'>
            <legend className='or'>OR</legend>
          </fieldset>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
              <input
                className='signup-input'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Email'
              />
              <input
                className='signup-input'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Username'
              />
              <input
                className='signup-input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'

              />
              <input
                className='signup-input'
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder='Confirm Password'
              />
            <button type="submit" className='signup-btn'>Sign Up</button>
          </form>

        </div>
        <div className='right-side'>
          <img className='signup-img' src='https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png'/>
        </div>

      </div>
    </>
  );
}

export default SignupFormPage;
