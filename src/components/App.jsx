import React, { useState } from 'react';
import Header from './Header/';
import css from './App.module.css'
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SignInModal from './SignInModal/SignInModal';
import SignUpModal from './SignUpModal/SignUpModal';

export const App = () => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInOpen] = useState(false);

  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  const openSignInModal = () => setSignInOpen(true);
  const closeSignInModal = () => setSignInOpen(false);

  return (  
    <div className={css.container}>
      <div className={css.backgroundContainer}>
        <Header onOpenSignUpModal={openSignUpModal} onOpenSignInModal={openSignInModal}/>
        <WelcomePage />
      </div>

      {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} />}
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};
