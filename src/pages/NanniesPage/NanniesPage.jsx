import React, { useState } from 'react';
import css from './NanniesPage.module.css'
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';
import NanniesList from 'components/NanniesList/NanniesList';

const NanniesPage = () => {
  const [filters, setFilters] = useState({
    sortBy: 'A to Z',
    priceRange: 'all',
    popularity: 'all'
  });

  const headerBackgroundColor = "#103931";

  const handleFilterChange = (filterType, value) => {
  setFilters(prevFilters => ({
    ...prevFilters,
    [filterType]: value
  }));
};

  return (
    <div className={css.container}>
      <Header backgroundColor={headerBackgroundColor} />
      <section className={css.section}>
        <Filter onFilterChange={handleFilterChange} />
        <NanniesList filters={filters} />
      </section>
    </div>
  );
}

export default NanniesPage;