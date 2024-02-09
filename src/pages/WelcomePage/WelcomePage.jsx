import React from 'react'
import css from './WelcomePage.module.css'
import arrowIcon from '../../assets/icons/arrow.svg'
import checkIcon from '../../assets/icons/check.svg'

const WelcomePage = () => {
  return (
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
  )
}

export default WelcomePage