import React, { useState } from 'react';
import css from './NanniesPage.module.css';
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';
import NanniesList from 'components/NanniesList/NanniesList';
import SignUpModal from 'components/SignUpModal/SignUpModal';
import SignInModal from 'components/SignInModal/SignInModal';

const NanniesPage = () => {
  const headerBackgroundColor = "#103931";
  const initialLoad = 3;

  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInOpen] = useState(false);

  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  const openSignInModal = () => setSignInOpen(true);
  const closeSignInModal = () => setSignInOpen(false);

  
  return (
    <div className={css.container}>
      <Header  backgroundColor={headerBackgroundColor} onOpenSignUpModal={openSignUpModal} onOpenSignInModal={openSignInModal}/>
      <section className={css.section}>
        <Filter/>
        <NanniesList initialLoad={initialLoad} />
      </section>

      {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} />}
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
}

export default NanniesPage