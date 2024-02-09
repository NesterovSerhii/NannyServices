import React, { useEffect } from 'react';
import css from './SignInModal.module.css';

const SignInModal = ({ onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${css.modal}`)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <span className={css.closeButton} onClick={onClose}>
      X
        </span>
        <h2>Log in</h2>
      </div>
    </div>
  );
};

export default SignInModal;
