import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter">
      Filter name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="Filter__input"
      />
    </label>
  );
};

export default Filter;
