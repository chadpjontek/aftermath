import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Get/set state of nav
  const [isNavOpen, setIsNavOpen] = useState(false);
  // Open nav
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // Close nav
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <nav className='nav'>
        <div className="nav-container">
          <div className="logo"><Link exact to='/' onClick={closeNav}><span role='img' aria-label='skull emoji'>💀</span> Aftermath</Link></div>
          <div onClick={toggleNav} className="hamburger">
            <div className={isNavOpen ? 'line open' : 'line'}></div>
            <div className={isNavOpen ? 'line open' : 'line'}></div>
            <div className={isNavOpen ? 'line open' : 'line'}></div>
          </div>
          <ul className={isNavOpen ? 'nav-links open' : 'nav-links'}>
            <li><Link to='/' onClick={toggleNav}>Home</Link></li>
            <li><Link to='/events' onClick={toggleNav}>Events</Link></li>
            <li><a href='https://discord.gg/X4kkAHm' onClick={toggleNav}>Discord</a></li>
            <li><Link to='/dkp' onClick={toggleNav}>DKP</Link></li>
            <li><Link to='/loot' onClick={toggleNav}>Loot history</Link></li>
            <li><Link to='/history' onClick={toggleNav}>DKP history</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}