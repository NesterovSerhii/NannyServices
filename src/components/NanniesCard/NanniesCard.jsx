import React, { useState, useEffect } from 'react';
import css from './NanniesCard.module.css';
import heartIcon from '../../assets/icons/heart.svg';
import heartFilledIcon from '../../assets/icons/heartFilled.svg'
import locationIcon from '../../assets/icons/location.svg';
import starIcon from '../../assets/icons/star.svg';
import onlineIcon from '../../assets/icons/isOnline.svg';


const NanniesCard = ({ nanny, openMeetingModal }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const [ageInYears, setAgeInYears] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(true);
  };

  const handleHeartClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const handleMakeAppointmentClick = () => {
    if (typeof openMeetingModal === 'function') {
      openMeetingModal(nanny);
    }
  };


  useEffect(() => {
      const today = new Date();
      const birthday = new Date(nanny.birthday);
      const ageInMilliseconds = today - birthday;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      setAgeInYears(ageInYears);

  }, [nanny]);

  const getInitial = (name) => {
    return name ? name[0].toUpperCase() : '';
  };

  return (
    <li className={css.cardWrap}>
      <div className={css.cardImgWrap}>
        <img className={css.profileImg} src={nanny.avatar_url} alt="User profile" />
        <img  className={css.onlineIcon} src={onlineIcon} alt="Online Icon" />
      </div>
      <div className={css.cardInfo}>
        <div className={css.upperPartCard}>
        <div className={css.addInfo}>
          <p>Nanny</p>
          <h2 className={css.name}>{nanny.name}</h2>
        </div>
        <ul className={css.ratings}>
          <li className={css.ratingsEl}>
            <div className={css.locationIcon}>
              <img src={locationIcon} alt="Location Icon" />
            </div>
            <p className={css.ratingsElText}>{nanny.location}</p>
            </li>
            <li className={css.ratingsEl}>
            <div className={css.starIcon}>
              <img src={starIcon} alt="Star Icon" />
            </div>
            <p className={css.ratingsElText}>Rating: {nanny.rating}</p>
            </li>
            <li className={css.ratingsEl}>
            <p className={css.ratingsElText}>Price / 1 hour: <span className={css.priceAccent}>{nanny.price_per_hour}$</span></p>
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
          <li className={css.paramsEl}>Experience: <span className={css.paramsAccent}>{nanny.experience}</span></li>
          <li className={css.paramsEl}>Kids Age: <span className={css.paramsAccent}>{nanny.kids_age}</span></li>
          <li className={css.paramsEl}>Characters: <span className={css.paramsAccent}>{nanny.characters.join(', ')}</span></li>
          <li className={css.paramsEl}>Education: <span className={css.paramsAccent}>{nanny.education}</span></li>
          </ul>
          <p className={css.message}>{nanny.about}</p>
          {isExpanded && (
            <>
          {nanny.reviews.map((review, index) => (
            <div className={css.commentWrap} key={index}>
              <div className={css.userWrap}>
              <div className={css.iconWrap}>
              <span className={css.userInit}>{getInitial(review.reviewer)}</span>
              </div>
              <div className={css.rating}>
                <p className={css.reviewer}>{review.reviewer}</p>
                <div className={css.starIcon}>
                  <img src={starIcon} alt="Star Icon" />
                <p className={css.ratingsElText}>{Number.isInteger(review.rating) ? review.rating.toFixed(1) : review.rating}</p>
                </div>
              </div>
              </div>
              <div className={css.comment}>{review.comment}</div>
              </div>
                  ))}
               <button
               type="button"
               className={css.cardBtn}
               onClick={handleMakeAppointmentClick}
             >
               Make an appointment
             </button>
           </>
         )}
          {!isExpanded && (
        <button type="button" className={css.readMoreBtn} onClick={handleReadMoreClick}>
          Read more
        </button>
      )}
        
      </div>
    </li>
  );
};

export default NanniesCard