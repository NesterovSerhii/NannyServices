import React from 'react';
import css from './NanniesPage.module.css';
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';

const NanniesPage = () => {
    const headerBackgroundColor = "#103931";
  return (
    <div className={css.container}>
      <Header  backgroundColor={headerBackgroundColor}/>
      <section className={css.section}>
        <Filter/>
      </section>
    </div>
  );
}

export default NanniesPage