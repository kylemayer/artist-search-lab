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
      aria-label="searchBar"
      role="searchBar"
    />
  </label>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Search;
