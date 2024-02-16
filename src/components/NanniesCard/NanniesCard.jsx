import React, { useState } from 'react';
import css from './NanniesCard.module.css';
import profileImg from '../../assets/images/profileImg_2x.jpeg';
import heartIcon from '../../assets/icons/heart.svg';
import heartFilledIcon from '../../assets/icons/heartFilled.svg'
import locationIcon from '../../assets/icons/location.svg';
import starIcon from '../../assets/icons/star.svg';
import onlineIcon from '../../assets/icons/isOnline.svg'

const NanniesCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <li className={css.cardWrap}>
      <div className={css.cardImgWrap}>
        <img className={css.profileImg} src={profileImg} alt="User profile" />
        <img  className={css.onlineIcon} src={onlineIcon} alt="Online Icon" />
      </div>
      <div className={css.cardInfo}>
        <div className={css.upperPartCard}>
        <div className={css.addInfo}>
          <p>Nanny</p>
          <h2 className={css.name}>Anna Shevchenko</h2>
        </div>
        <ul className={css.ratings}>
          <li className={css.ratingsEl}>
            <div className={css.locationIcon}>
              <img src={locationIcon} alt="Location Icon" />
            </div>
            <p className={css.ratingsElText}>Kyiv, Ukraine</p>
            </li>
            <li className={css.ratingsEl}>
            <div className={css.starIcon}>
              <img src={starIcon} alt="Star Icon" />
            </div>
            <p className={css.ratingsElText}>Rating: 4.5</p>
            </li>
            <li className={css.ratingsEl}>
            <p className={css.ratingsElText}>Price / 1 hour: <span className={css.priceAccent}>15$</span></p>
            </li>
            <button type="button" className={css.heartBtn} onClick={handleHeartClick}>
        {isFavorite ? (
          <img src={heartFilledIcon} alt="Filled Heart Icon" className={css.favoriteIcon} />
        ) : (
          <img src={heartIcon} alt="Heart Icon" />
        )}
      </button>
        </ul>
          </div>
          <ul className={css.params}>
          <li className={css.paramsEl}>Age: <span className={css.paramsAccentAge}>27</span></li>
          <li className={css.paramsEl}>Experience: <span className={css.paramsAccent}>5 years</span></li>
          <li className={css.paramsEl}>Kids Age: <span className={css.paramsAccent}>1 to 6 years old</span></li>
          <li className={css.paramsEl}>Characters: <span className={css.paramsAccent}>Patient, Energetic, Creative, Punctual</span></li>
          <li className={css.paramsEl}>Education: <span className={css.paramsAccent}>Bachelor&apos;s in Early Childhood Education, First Aid Certified</span></li>
          </ul>
          <p className={css.message}>I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.</p>
          <button type='button' className={css.readMoreBtn}>Read more</button>
      </div>
    </li>
  )
}

export default NanniesCard