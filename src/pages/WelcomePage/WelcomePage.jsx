import React, { useState } from 'react';
import css from './WelcomePage.module.css';
import arrowIcon from '../../assets/icons/arrow.svg';
import checkIcon from '../../assets/icons/check.svg';
import Header from 'components/Header';
import SignInModal from '../../components/SignInModal/SignInModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';

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
        <section className={css.heroSection}>
          <div className={css.heroTitleWrap}>
            <h1 className={css.heroTitle}>Make Life Easier for the Family:</h1>
            <p className={css.heroText}>Find Babysitters Online for All Occasions</p>
            <a href="/" className={css.heroBtn}>
              Get started
              <svg className={css.arrowIcon}>
                <use xlinkHref={arrowIcon + '#arrow'} />
              </svg>
            </a>
          </div>
          <div className={css.heroSectionAddInfo}>
            <div className={css.checkWrap}>
              <svg className={css.checkIcon}>
                <use xlinkHref={checkIcon + '#feCheck2'} />
              </svg>
            </div>
            <div className={css.addInfoTextWrap}>
              <p className={css.addInfoText}>Experienced nannies</p>
              <p className={css.addInfoAmount}>15,000</p>
            </div>
          </div>
        </section>
      </div>

      {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} />}
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default WelcomePage;
