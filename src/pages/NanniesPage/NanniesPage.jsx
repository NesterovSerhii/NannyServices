import React, {useState} from 'react';
import css from './NanniesPage.module.css';
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';
import NanniesList from 'components/NanniesList/NanniesList';

const NanniesPage = () => {
  const headerBackgroundColor = "#103931";
  
  const [loadedNannies, setLoadedNannies] = useState(3);
  
  const handleLoadMore = () => {
    setLoadedNannies((prevLoadedNannies) => prevLoadedNannies + 3);
  };
  return (
    <div className={css.container}>
      <Header  backgroundColor={headerBackgroundColor}/>
      <section className={css.section}>
        <Filter/>
        <NanniesList loadedNannies={loadedNannies} />
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      </section>
    </div>
  );
}

export default NanniesPage