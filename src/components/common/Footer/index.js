import React from 'react';

import './Footer.scss';
import logo from '../../../images/logo_footer.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <span>Learn Playing. Play Learning</span>
      </div>
      <div className='footer-body container'>
        <div className='footer-body-section'>
          <div>
            <a className='sns-link'>
              <div className='sns-link-image twitter'></div>
              <span className='sns-link-text'>@SoloLearn</span>
            </a>
            <a className='sns-link'>
              <div className='sns-link-image facebook'></div>
              <span className='sns-link-text'>SoloLearn</span>
            </a>
            <a className='sns-link'>
              <div className='sns-link-image google'></div>
              <span className='sns-link-text'>+SoloLearn</span>
            </a>
          </div>
        </div>
        <div className='footer-body-section'>
          <ul className='footer-nav'>
            <li className='footer-nav-list'><a href='#'>Home</a></li>
            <li className='footer-nav-list'><a href='#'>Features</a></li>
            <li className='footer-nav-list'><a href='#'>Courses</a></li>
            <li className='footer-nav-list'><a href='#'>Blog</a></li>
            <li className='footer-nav-list'><a href='#'>Contact</a></li>
            <li className='footer-nav-list'><a href='#'>Terms of Use</a></li>
            <li className='footer-nav-list'><a href='#'>FAQ</a></li>
          </ul>
        </div>
        <div className='footer-body-section'>
          <div className='about'>
            <img src={logo}/>
            <p>SoloLearn Inc.</p>
            <address>5020 Franklin Drive, Suite 100<br/> Pleasanton, CA 94588</address>
            <button>Email Us</button>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <span>© 2019 SoloLearn, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;