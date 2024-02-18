import React, { useState, useEffect } from 'react';
import css from './NanniesCard.module.css';
import heartIcon from '../../assets/icons/heart.svg';
import heartFilledIcon from '../../assets/icons/heartFilled.svg'
import locationIcon from '../../assets/icons/location.svg';
import starIcon from '../../assets/icons/star.svg';
import onlineIcon from '../../assets/icons/isOnline.svg';

import {getNannyData} from '../../firebase/nanniesService';

const NanniesCard = ({ nannyId }) => {
const [nannyData, setNannyData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ageInYears, setAgeInYears] = useState(0);

  const handleHeartClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNannyData(nannyId);
      setNannyData(data);

      const today = new Date();
      const birthday = new Date(data.birthday);
      const ageInMilliseconds = today - birthday;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      setAgeInYears(ageInYears);

    };

    fetchData();
  }, [nannyId]);

  if (!nannyData) {
    return <div>Loading..</div>; 
  }
  return (
    <li className={css.cardWrap}>
      <div className={css.cardImgWrap}>
        <img className={css.profileImg} src={nannyData.avatar_url} alt="User profile" />
        <img  className={css.onlineIcon} src={onlineIcon} alt="Online Icon" />
      </div>
      <div className={css.cardInfo}>
        <div className={css.upperPartCard}>
        <div className={css.addInfo}>
          <p>Nanny</p>
          <h2 className={css.name}>{nannyData.name}</h2>
        </div>
        <ul className={css.ratings}>
          <li className={css.ratingsEl}>
            <div className={css.locationIcon}>
              <img src={locationIcon} alt="Location Icon" />
            </div>
            <p className={css.ratingsElText}>{nannyData.location}</p>
            </li>
            <li className={css.ratingsEl}>
            <div className={css.starIcon}>
              <img src={starIcon} alt="Star Icon" />
            </div>
            <p className={css.ratingsElText}>Rating: {nannyData.rating}</p>
            </li>
            <li className={css.ratingsEl}>
            <p className={css.ratingsElText}>Price / 1 hour: <span className={css.priceAccent}>{nannyData.price_per_hour}$</span></p>
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
          <li className={css.paramsEl}>Age: <span className={css.paramsAccentAge}>{ageInYears}</span></li>
          <li className={css.paramsEl}>Experience: <span className={css.paramsAccent}>{nannyData.experience}</span></li>
          <li className={css.paramsEl}>Kids Age: <span className={css.paramsAccent}>{nannyData.kids_age}</span></li>
          <li className={css.paramsEl}>Characters: <span className={css.paramsAccent}>{nannyData.characters.join(', ')}</span></li>
          <li className={css.paramsEl}>Education: <span className={css.paramsAccent}>{nannyData.education}</span></li>
          </ul>
          <p className={css.message}>{nannyData.about}</p>
          <button type='button' className={css.readMoreBtn}>Read more</button>
      </div>
    </li>
  )
}

export default NanniesCard