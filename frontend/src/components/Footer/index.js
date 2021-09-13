import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="top-footer">
                <div className="column-container">
                    <h3>About</h3>
                    <ul>
                        <li>About Yelp</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Investor Relations</li>
                        <li>Trust & Safety</li>
                        <li>Content Guidelines</li>
                        <li>Accessibility Statement</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
                <div className="column-container">
                    <h3>Discover</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
                <div className="column-container">
                    <h3>Yelp for Business</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
                <div className="column-container">
                    <h3>Languages</h3>

                    <p>English</p>

                    <h3>Countries</h3>
                    <p>United States</p>

                </div>
            </div>
            <div className="lower-footer"></div>



        </div>
    )
}
