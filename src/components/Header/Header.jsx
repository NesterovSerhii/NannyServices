import React from 'react'
import css from './Header.module.css'
const Header = ({ onOpenSignUpModal, onOpenSignInModal }) => {
    const handleSignInClick = (e) => {
        e.preventDefault();
        onOpenSignInModal();
      };
    
      const handleSignUpClick = (e) => {
        e.preventDefault();
        onOpenSignUpModal();
      };

  return (
    <header className={css['header-container']}>
        <div>
            <a href="/" className={css.logo}>Nanny.Services</a>
        </div>
        <nav className={css.nav}>
            <div className={css['header-nav-links']}>
                <a href="/">Home</a>
                <a href="/nannies">Nannies</a>
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