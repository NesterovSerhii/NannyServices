import React from 'react'
import css from '../NanniesPage/NanniesPage.module.css';
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';
import NanniesList from 'components/NanniesList/NanniesList';

const FavoritesPage = () => {
  const headerBackgroundColor = "#103931";
  const initialLoad = 3;

  return (
    <div className={css.container}>
      <Header backgroundColor={headerBackgroundColor} />
      <section className={css.section}>
        <Filter/>
        <NanniesList initialLoad={initialLoad} />
      </section>
    </div>
  );
}

export default FavoritesPage