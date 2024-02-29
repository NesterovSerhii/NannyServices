import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './MeetingModal.module.css';
import closeBtnIcon from '../../assets/icons/closeBtn.svg';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const phoneRegexp = /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/;

export const basicSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  phone: Yup.string().matches(phoneRegexp,'Enter a valid phone').required('Address is required'),
  age: Yup.number().required().positive().integer(),
  time: Yup.string()
   .matches(/^(0[0-9]|1[0-9]|2[0-3]):(00|30)$/, 'Invalid time format')
  .required('Time is required'),
  email: Yup.string().matches(emailRegexp, 'Enter a valid Email').email('Enter a valid Email').required('Email is required'),
  parentName: Yup.string().required('Name is required'),
  comment: Yup.string().max(250),
  
});

const MeetingModal = ({ onClose, nanny }) => {
  const modalRef = useRef(null);
  
  const formik = useFormik({
    initialValues: {
      address: '',
      phone: '',
      age: "",
      time: '',
      email: '',
      parentName: '',
      comment: '',
    },
    validationSchema: basicSchema,
    onSubmit: async (values, { setSubmitting }) => {
  try {
    console.log('values', values);
    onClose();

  } catch (error) {
    console.error('Error geting data', error.message);
  } finally {
    setSubmitting(false);
  }
},
  });

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
  }, [onClose]);

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal} ref={modalRef} tabIndex="-1">
        <button className={css.closeButton} onClick={onClose}>
          <img src={closeBtnIcon} alt="Close" />
        </button>
        <h2 className={css.modalTitle}>Make an appointment with a babysitter</h2>
        <p className={css.modalDesc}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
        <div className={css.profileWrap}>
          <div className={css.cardImgWrap}>
            <img className={css.profileImg} src={nanny.avatar_url} alt="User profile" />
          </div>
          <div className={css.addInfo}>
            <p className={css.nannyText}>Your nanny</p>
            <h2 className={css.name}>{nanny.name}</h2>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} onClick={(e) => e.stopPropagation()} className={css.form}>
          <input
            className={`${css.formInput} ${formik.errors.address && formik.touched.address ? css.formInputError : ''}`}
            id="address"
            name="address"
            type="text"
            placeholder='Address'
            onChange={formik.handleChange}
            value={formik.values.address}
            autoComplete='off'
          />
          <input
            className={`${css.formInput} ${formik.errors.phone && formik.touched.phone ? css.formInputError : ''}`}
            id="phone"
            name="phone"
            type="text"
            placeholder='+380'
            onChange={formik.handleChange}
            value={formik.values.phone}
            autoComplete='off'
          />
          <input
            className={`${css.formInput} ${formik.errors.age && formik.touched.age ? css.formInputError : ''}`}
            id="age"
            name="age"
            type="number"
            placeholder='Child&#39;s age'
            min={0}
            onChange={formik.handleChange}
            value={formik.values.age}
            autoComplete='off'
          />
          <div className={`${css.formInput} ${css.timeInput}`}>
            <div className={css.timeInputWrapper}>
              <select
                className={css.select}
                id="time"
                name="time"
                onChange={formik.handleChange}
                value={formik.values.time}
              >
                <option value="">00:00</option>
                {[...Array(24 * 2)].map((_, index) => {
                  const hours = Math.floor(index / 2);
                  const minutes = index % 2 === 0 ? '00' : '30';
                  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}`;
                  return <option key={formattedTime} value={formattedTime}>{formattedTime}</option>;
                })}
              </select>
            </div>
            {formik.errors.time && formik.touched.time && (
              <div className={css.errorMessage}>{formik.errors.time}</div>
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
            style={{ width: '100%' }} 
            autoComplete='off'
          />
          <input
            className={`${css.formInput} ${formik.errors.parentName && formik.touched.parentName ? css.formInputError : ''}`}
            id="parentName"
            name="parentName"
            type="text"
            placeholder='Father&#39;s or mother&#39;s name'
            onChange={formik.handleChange}
            value={formik.values.parentName}
            style={{ width: '100%' }} 
            autoComplete='off'
          />
          <textarea
            className={`${css.formInput} ${formik.errors.comment && formik.touched.comment ? css.formInputError : ''}`}
            id="comment"
            name="comment"
            type="text"
            placeholder='Comment'
            onChange={formik.handleChange}
            value={formik.values.comment}
            rows={5}  
            style={{ resize: 'none', width: '100%' }}  
            autoComplete='off' />
            <button type='submit'className={css.formBtn}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default MeetingModal