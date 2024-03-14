  import React, { useEffect, useState } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import NanniesCard from 'components/NanniesCard/NanniesCard';
  import css from './NanniesList.module.css';
  import { getMoreNanniesData } from '../../firebase/nanniesService';

  const NanniesList = ({ filters }) => {
    const [nannies, setNannies] = useState([]);
    const [totalLoaded, setTotalLoaded] = useState(3);
    const [allNanniesLoaded, setAllNanniesLoaded] = useState(false);
    const [filteredNanniesCount, setFilteredNanniesCount] = useState(0);

    useEffect(() => {
      const loadNannies = async () => {
        const data = await getMoreNanniesData(0, totalLoaded);
        if (data) {
          const filteredNannies = applyFilters(data, filters);
          setFilteredNanniesCount(filteredNannies.length);
          setNannies(filteredNannies);
          if (data.length < totalLoaded) {
            setAllNanniesLoaded(true);
            toast.info('All nannies loaded!', {
              position: 'top-right',
            });
          }
        }
      };

      loadNannies();
    }, [totalLoaded, filters]);

    const handleLoadMore = () => {
      if (!allNanniesLoaded) {
        setTotalLoaded(prevTotalLoaded => prevTotalLoaded + 3);
      }
    };

    return (
      <div>
          {filteredNanniesCount === 0 && <p className={css.notFoundMessage}>No nannies found matching the selected criteria.</p>}
        <ul className={css.nanniesList}>
          {nannies.map((nanny, index) => (
            <NanniesCard key={index} nanny={nanny} />
          ))}
        </ul>
        {!allNanniesLoaded && (
          <button className={css.loadMoreBtn} type="button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
        <ToastContainer />
      </div>
    );
  };

  const applyFilters = (nannies, filters) => {
    let filteredNannies = [...nannies];

    if (filters.sortBy === 'A to Z') {
      filteredNannies = filteredNannies.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'Z to A') {
      filteredNannies = filteredNannies.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sortBy === 'Less than 10$') {
      filteredNannies = filteredNannies.filter(nanny => nanny.price_per_hour < 10);
    } else if (filters.sortBy === 'Greater than 10$') {
      filteredNannies = filteredNannies.filter(nanny => nanny.price_per_hour > 10);
    } else if (filters.sortBy === 'Popular') {
      filteredNannies = filteredNannies.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'Not popular') {
      filteredNannies = filteredNannies.sort((a, b) => a.rating - b.rating);
    }

    return filteredNannies;
  };

  export default NanniesList;