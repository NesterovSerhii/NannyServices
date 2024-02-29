import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import css from './Header.module.css'
import { useAuth } from '../../firebase/auth';
import userIcon from '../../assets/icons/user.svg';

const Header = ({ onOpenSignUpModal, onOpenSignInModal, backgroundColor }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { auth, user } = useAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);
  
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
          {isLoggedIn && <Link to="/favorites">Favorites</Link>}
        </div>
        <ul className={css.headerButtons}>
          {!isLoggedIn ? (
            <>
              <li>
                <a href="/" onClick={handleSignInClick} className={css.headerLoginBtn}>
                  Log in
                </a>
              </li>
              <li>
                <a href="/" onClick={handleSignUpClick} className={css.headerRegBtn}>
                  Registration
                </a>
              </li>
            </>
          ) : (
            <li>
              <div className={css.btnsWrap}>
                <div className={css.userInfo}>
                  <div className={css.userImgWrap}>
                    <img src={userIcon} alt="User icon" />
                    </div>
                    <p className={css.userName}>{user.displayName}</p>
                </div>
                <button className={css.headerLogOutBtn} onClick={() => auth.signOut()}>Log Out</button>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header