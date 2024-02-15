import React from 'react';
import css from './NanniesPage.module.css';
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';
import NanniesList from 'components/NanniesList/NanniesList';

const NanniesPage = () => {
    const headerBackgroundColor = "#103931";
  return (
    <div className={css.container}>
      <Header  backgroundColor={headerBackgroundColor}/>
      <section className={css.section}>
        <Filter/>
        <NanniesList />
      </section>
    </div>
  );
}

export default NanniesPage