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
    <header className={css['header-container']} style={{ backgroundColor }}>
      <div>
        <Link to="/" className={css.logo}>Nanny.Services</Link>
      </div>
      <nav className={css.nav}>
        <div className={css['header-nav-links']}>
          <Link to="/">Home</Link>
          <Link to="/nannies">Nannies</Link>
        </div>
        <ul className={css['header-buttons']}>
          <li>
            <a href="/" onClick={handleSignInClick} className={css['header-login-button']}>Log in</a>
          </li>
          <li>
            <a href="/" onClick={handleSignUpClick} className={css['header-reg-button']}>Registration</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header