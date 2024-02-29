import React, { useEffect, useRef }  from 'react'
import css from './MeetingModal.module.css'
import closeBtnIcon from '../../assets/icons/closeBtn.svg'

const MeetingModal = ({ onClose, nanny }) => {
    const modalRef = useRef(null);

    useEffect(() => {
      modalRef.current.focus();
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (!modalRef.current.contains(event.target)) {
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal} ref={modalRef} tabIndex="-1">
        <button className={css.closeButton} onClick={onClose}>
          <img src={closeBtnIcon} alt="Close" />
        </button>
        <h2 className={css.formTitle}>Make an appointment with a babysitter</h2>
        <p className={css.formText}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
        <div>
        <div className={css.cardImgWrap}>
        <img className={css.profileImg} src={nanny.avatar_url} alt="User profile" />
        </div>
        <div className={css.addInfo}>
          <p>Nanny</p>
          <h2 className={css.name}>{nanny.name}</h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingModal