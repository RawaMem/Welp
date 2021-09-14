import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="top-footer">
                <div className="column-container">
                    <h3 className='footer-titles'>About</h3>
                    <ul>
                        <li>About Yelp</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Investor Relations</li>
                        <li>Trust and Safety</li>
                        <li>Content Guidelines</li>
                        <li>Accessibility Statement</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Ad Choices</li>
                    </ul>

                </div>
                <div className="column-container">
                    <h3 className='footer-titles'>Discover</h3>
                    <ul>
                        <li>Yelp Project Cost Guides</li>
                        <li>Collections</li>
                        <li>Talk</li>
                        <li>Events</li>
                        <li>The Local Yelp</li>
                        <li>Yelp Blog</li>
                        <li>Support</li>
                        <li>Yelp Mobile</li>
                        <li>Developers</li>
                        <li>RSS</li>
                    </ul>

                </div>
                <div className="column-container">
                    <h3 >Yelp for Business</h3>
                    <ul>
                        <li>Claim your Business Page</li>
                        <li>Advertise on Yelp</li>
                        <li>Yelp for Restaurant Owners</li>
                        <li>Table Management</li>
                        <li>Business Success Stories</li>
                        <li>Business Support</li>
                        <li>Yelp Blog for Business</li>
                    </ul>

                </div>
                <div className="column-container">
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
