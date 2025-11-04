import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>V<span>-Kitchen</span></h1>
                <p>“V-Kitchen connects you with the best restaurants around you — serving delicious food, made with love, and delivered with care. Because great meals deserve great moments.”</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/share/1BSKFKMnRT/"><img src={assets.facebook_icon} alt="" /></a>
                    <img src={assets.twitter_icon} alt="" />
                    <a href="https://www.linkedin.com/in/ivishal-singh/"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Delivery</li>
                   <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@v-kitchen.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 @ V-Kitchen.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer;