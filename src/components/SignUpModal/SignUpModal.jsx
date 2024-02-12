import React, { useEffect } from 'react';
 import { useFormik } from 'formik';
import css from './SignUpModal.module.css';
import closeBtnIcon from '../../assets/icons/closeBtn.svg'

const SignUpModal = ({ onClose }) => {

   const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
       password: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

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

        <button className={css.closeButton} onClick={onClose}>
  <img src={closeBtnIcon} alt="Close" />
</button>
        <h2 className={css.formTitle}>Registration</h2>
        <p className={css.formText}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>

         <form onSubmit={formik.handleSubmit}>
       <input className={css.formInput}
         id="name"
         name="name"
         type="text"
         placeholder='Name'
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <input className={css.formInput}
         id="email"
         name="email"
         type="email"
         placeholder='Email'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <input className={css.formInput}
         id="password"
         name="password"
         type="password"
         placeholder='Password'
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <button className={css.formBtn} type="submit">Sign Up</button>
     </form>
      </div>
    </div>
  );
};

export default SignUpModal;
