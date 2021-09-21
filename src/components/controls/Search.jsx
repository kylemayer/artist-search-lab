import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onSearch }) => (
  <label>
    Search for an artist
    <input
      type="text"
      name="searchTerm"
      value={searchTerm}
      onChange={onSearch}
    />
  </label>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.string.isRequired
};

export default Search;
