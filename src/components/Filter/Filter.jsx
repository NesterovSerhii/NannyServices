import React, { useState } from 'react';
import css from './Filter.module.css';
import arrowDownIcon from '../../assets/icons/chevronDown.svg';

const Filter = ({ onFilterChange }) => {
  const [selectedOption, setSelectedOption] = useState('A to Z');
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false);
     onFilterChange('sortBy', option);
  };

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <div className={css.customSelect}>
      <h2 className={css.title}>Filter</h2>
      <div className={css.selectContainer}>
        <div
          onClick={toggleOptions}
          className={`${css.select} ${optionsVisible ? css.expanded : ''}`}
        >
          {selectedOption} <img src={arrowDownIcon} alt="down-arrow" className={css.icon} />
        </div>
        {optionsVisible && (
          <div className={css.customOptions}>
            {['A to Z', 'Z to A', 'Less than 10$', 'Greater than 10$', 'Popular', 'Not popular', 'Show all'].map((option) => (
              <div
                key={option}
                className={`${css.customOption} ${selectedOption === option ? css.selected : ''}`}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
