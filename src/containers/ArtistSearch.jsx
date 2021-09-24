import React, { useState, useEffect } from 'react';
import { getArtists } from '../services/fetchApi.js';
import Search from '../components/controls/Search';
import ArtistList from '../components/displays/ArtistList';
import styles from '../components/styles/ArtistSearch.css';
import Paginate from '../components/controls/Pagination.jsx';

const ArtistSearch = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('g');
  const [offSet, setOffset] = useState(0);

  useEffect(() => {
    if (searchTerm) return getArtists(searchTerm, offSet).then((res) => setArtists(res));
  }, [offSet, searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const updateOffset = (number) => {
    setOffset((prevPage) => prevPage + number);
  };

  return (
    <div className={styles.artistsearch}>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <Paginate offSet={offSet} artists={artists} updateOffset={updateOffset} />
      {artists.length && <ArtistList artists={artists} />}
    </div>
  );
};

export default ArtistSearch;
