import React from 'react';
import './Header.scss';

import logo from '../../../images/logo.png';

const navlist = [
  {
    title: 'DISCUSS',
    to: '/discuss',
  },
  {
    title: 'BLOG',
    to: '/blog',
  },
  {
    title: 'SIGN IN',
    to: '/signin',
  },
  
];

const Header = ({ activeIndex }) => {
  return (
    <header>
      <div className='header-inner-wrapper'>
        <div className='header-left'>
        <a className='header-logo' href='/'>
          <img src={logo} />
        </a>
        </div>
        <div className='header-right'>
          <HeaderNav 
            navlist={navlist}
            activeIndex={activeIndex} />
        </div>
      </div>
    </header>
  );
}

const HeaderNav = ({ navlist = [], activeIndex }) => {
  return (
    <nav className='header-nav'>
      <ul className='header-nav-list'>
        {navlist.map((v, i) => (
          <li className={`header-nav-link ${i === activeIndex ? 'active' : ''}`} key={`header_nav_${i}`}>
            <a href={v.to}>{v.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;