import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className='profile-btn' user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="login-btn-container">
          <NavLink className='login-btn' to="/login">Log In</NavLink>
          <NavLink className='signup-btn' to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="nav-businesspage">
      <div className="nav-container">
        <div className="home-btn-container">
          <NavLink className='home-btn' exact to="/"><img src="https://www.adweek.com/wp-content/uploads/2021/08/YelpLogoAugust2021.jpg.webp" alt="logo" className="yelp-logo" /></NavLink>
        </div>
        <div className="search-bar-container">
          <input type="search" placeholder="tacos, cheap dinner, Max's" className='search-bar-style'/>
          <button className="search-btn">search</button>
        </div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
