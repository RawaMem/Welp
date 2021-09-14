import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Footer.css';


export const Footer = () => {
    return(
        <div className="footer-container">
            <div className="top-footer">
                <div className="column-container">
                    <h3 className='footer-titles'>About</h3>
                    <div className='ul-style'>
                        <p>About Yelp</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Investor Relations</p>
                        <p>Trust and Safety</p>
                        <p>Content Guidelines</p>
                        <p>Accessibility Statement</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Ad Choices</p>
                    </div>

                </div>
                <div className="column-container">
                    <h3 className='footer-titles'>Discover</h3>
                    <div className='ul-style'>
                        <p>Yelp Project Cost Guides</p>
                        <p>Collections</p>
                        <p>Talk</p>
                        <p>Events</p>
                        <p>The Local Yelp</p>
                        <p>Yelp Blog</p>
                        <p>Support</p>
                        <p>Yelp Mobile</p>
                        <p>Developers</p>
                        <p>RSS</p>
                    </div>

                </div>
                <div className="column-container higher">
                    <h3 className='footer-titles'>Yelp for Business</h3>
                    <div className='ul-style'>
                        <p className='lineheight'>Claim your Business Page</p>
                        <p>Advertise on Yelp</p>
                        <p>Yelp for Restaurant Owners</p>
                        <p>Table Management</p>
                        <p>Business Success Stories</p>
                        <p>Business Support</p>
                        <p>Yelp Blog for Business</p>
                    </div>

                </div>
                <div className="column-container higher">
                    <h3 className='footer-titles'>Languages</h3>

                    <p>English</p>

                    <h3 className='footer-titles'>Countries</h3>
                    <p>United States</p>

                </div>
            </div>
            <div className="lower-footer">
                <p>Designed and Engineered by Rawaha Memon</p>
            </div>



        </div>
    )
}
