import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './SignUpModal.module.css';
import closeBtnIcon from '../../assets/icons/closeBtn.svg'
import eyeClosedIcon from '../../assets/icons/eye-off.svg';
import eyeIcon from '../../assets/icons/eye.svg';

const passwordRegExp =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


export const basicSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2).max(32),
  email: Yup
    .string()
    .matches(emailRegexp, 'Enter a valid Email')
    .email('Enter a valid Email')
    .required('Email is required'),
  password: Yup
    .string()
    .required('Password is required')
    .matches(passwordRegExp, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character. It should be 8 to 32 characters long.'),
});

const SignUpModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

   const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
       password: '',
     },
      validationSchema: basicSchema,
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
          <input
            className={`${css.formInput} ${formik.errors.name && formik.touched.name ? css.formInputError : ''}`}
            id="name"
            name="name"
            type="text"
            placeholder='Name'
            autoComplete='off'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <div className={css.errorMsg}>
            {formik.errors.name && formik.touched.name && (
              <div className={css.inputError}>{formik.errors.name}</div>
            )}
          </div>
          <input
            className={`${css.formInput} ${formik.errors.email && formik.touched.email ? css.formInputError : ''}`}
            id="email"
            name="email"
            type="email"
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
            autoComplete='off'
          />
          <div className={css.errorMsg}>
            {formik.errors.email && formik.touched.email && (
              <div className={css.inputError}>{formik.errors.email}</div>
            )}
          </div>
          <div className={css.passInputWrap}>
          <input
            className={`${css.formInput} ${css.formInputPassword} ${formik.errors.password && formik.touched.password ? css.formInputError : ''}`}
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
            autoComplete='off'
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className={css.togglePasswordBtn}>
            {showPassword ? (
              <img src={eyeClosedIcon} alt="Hide" />
            ) : (
              <img src={eyeIcon} alt="Show" />
            )}
          </button>
          </div>
          <div className={css.errorMsg}>
            {formik.errors.password && formik.touched.password && (
              <div className={css.inputError}>{formik.errors.password}</div>
            )}
          </div>
          <button className={css.formBtn} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
