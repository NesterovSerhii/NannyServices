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
                <button type='button' className={css['header-login-button']}>Log in</button>
                </li>
               <li>
                <button type='button' className={css['header-reg-button']}>Registration</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header