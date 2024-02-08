import React from 'react'
import css from './WelcomePage.module.css'
import heroImg1x from '../../assets/images/hero_1x.jpeg'
import heroImg2x from '../../assets/images/hero_2x.jpeg'

import arrowIcon from '../../assets/icons/arrow.svg'

const WelcomePage = () => {
  return (
    <section className={css['hero-section']}>
        <div className={css['hero-title-wrap']}>
            <h1 className={css['hero-title']}>Make Life Easier for the Family:</h1>
            <p className={css['hero-text']}>Find Babysitters Online for All Occasions</p>
        <a href="#" className={css['hero-btn']}>
            Get started
            <svg className={css['arrow-icon']}>
          <use xlinkHref={arrowIcon + '#arrow'} />
        </svg>
        </a>
        </div>
        {/* <picture className={css.img}>
        <source
          srcSet={`${heroImg1x} 1x, ${heroImg2x} 2x`}
          type="image/jpeg"
        />
        <img
          src={heroImg1x}
          alt="Hero Image"
          className={css['hero-image']}
        />
      </picture> */}
    </section>
  )
}

export default WelcomePage