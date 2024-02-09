import React from 'react'
import css from './Header.module.css'
const Header = () => {
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
                <a href="/" className={css['header-login-button']}>Log in</a>
                </li>
               <li>
                <a href="/" className={css['header-reg-button']}>Registration</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header