
import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by name"
      className={styles.inputFilter}
    />
  );
};

export default Filter;
