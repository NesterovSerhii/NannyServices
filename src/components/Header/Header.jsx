import React from 'react'
import { Link } from 'react-router-dom'
import css from './Header.module.css'

const Header = ({ onOpenSignUpModal, onOpenSignInModal, backgroundColor }) => {
  
    const handleSignInClick = (e) => {
        e.preventDefault();
        onOpenSignInModal();
      };
    
      const handleSignUpClick = (e) => {
        e.preventDefault();
        onOpenSignUpModal();
      };

  return (
    <header className={css.headerContainer} style={{ backgroundColor }}>
      <div>
        <Link to="/" className={css.logo}>Nanny.Services</Link>
      </div>
      <nav className={css.nav}>
        <div className={css.headerNavLinks}>
          <Link to="/">Home</Link>
          <Link to="/nannies">Nannies</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
        <ul className={css.headerButtons}>
          <li>
            <a href="/" onClick={handleSignInClick} className={css.headerLoginBtn}>Log in</a>
          </li>
          <li>
            <a href="/" onClick={handleSignUpClick} className={css.headerRegBtn}>Registration</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header