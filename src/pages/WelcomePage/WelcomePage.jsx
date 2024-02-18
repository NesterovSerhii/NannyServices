import React, { useState } from 'react';
import css from './WelcomePage.module.css';
import arrowIcon from '../../assets/icons/arrow.svg';
import checkIcon from '../../assets/icons/check.svg';
import Header from 'components/Header';
import SignInModal from '../../components/SignInModal/SignInModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import { AuthProvider } from '../../firebase/auth';

const WelcomePage = () => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInOpen] = useState(false);

  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  const openSignInModal = () => setSignInOpen(true);
  const closeSignInModal = () => setSignInOpen(false);

  return (
    <div className={css.container}>
      <div className={css.backgroundContainer}>
        <Header onOpenSignUpModal={openSignUpModal} onOpenSignInModal={openSignInModal} />
        <section className={css['hero-section']}>
          <div className={css['hero-title-wrap']}>
            <h1 className={css['hero-title']}>Make Life Easier for the Family:</h1>
            <p className={css['hero-text']}>Find Babysitters Online for All Occasions</p>
            <a href="/" className={css['hero-btn']}>
              Get started
              <svg className={css['arrow-icon']}>
                <use xlinkHref={arrowIcon + '#arrow'} />
              </svg>
            </a>
          </div>
          <div className={css['hero-section-add-info']}>
            <div className={css['check-wrap']}>
              <svg className={css['check-icon']}>
                <use xlinkHref={checkIcon + '#feCheck2'} />
              </svg>
            </div>
            <div className={css['add-info-text-wrap']}>
              <p className={css['add-info-text']}>Experienced nannies</p>
              <p className={css['add-info-amount']}>15,000</p>
            </div>
          </div>
        </section>
      </div>
      <AuthProvider />

      {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} />}
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default WelcomePage;
