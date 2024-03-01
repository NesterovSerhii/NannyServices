import React, { useEffect, useState } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NanniesCard from 'components/NanniesCard/NanniesCard';
import css from './NanniesList.module.css';
import { getMoreNanniesData } from '../../firebase/nanniesService';

const NanniesList = ({ initialLoad, openMeetingModal }) => {
  const [nannies, setNannies] = useState([]);
  const [totalLoaded, setTotalLoaded] = useState(initialLoad);
  const [allNanniesLoaded, setAllNanniesLoaded] = useState(false);

  useEffect(() => {
    const loadNannies = async () => {
      const data = await getMoreNanniesData(0, totalLoaded);
      if (data) {
        setNannies(data);
        if (data.length < totalLoaded) {
          setAllNanniesLoaded(true);
          toast.info('All nannies loaded!', {
            position: "top-right"
          });
        }
      }
    };

    loadNannies();
  }, [totalLoaded]);

  const handleLoadMore = () => {
    if (!allNanniesLoaded) {
      setTotalLoaded((prevTotalLoaded) => prevTotalLoaded + 3);
    }
  };

  return (
    <div>
      <ul className={css.nanniesList}>
         {nannies.map((nanny, index) => (
        <NanniesCard key={index} nanny={nanny} openMeetingModal={openMeetingModal} />
        ))}
      </ul>
      {!allNanniesLoaded && (
        <button className={css.loadMoreBtn} type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <ToastContainer />
    </div>
  )
};

export default NanniesList;