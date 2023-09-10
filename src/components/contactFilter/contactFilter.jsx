import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './contactFilter.styled';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
    />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
