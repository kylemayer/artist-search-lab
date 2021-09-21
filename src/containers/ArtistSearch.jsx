import React, { useState, useEffect } from 'react';
import { getArtists } from '../services/fetchApi.js';
import Search from '../components/controls/Search';
import ArtistList from '../components/displays/ArtistList';
import Pagination from 'react-js-pagination';

const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const loadArtists = async () => {
      if(!searchTerm) return setLoading(false);
      const artistsFromApi = await getArtists(searchTerm);
      setArtists(artistsFromApi);
      setLoading(false);
    };

    loadArtists();
  }, [searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <Pagination 
        activePage={activePage}
        totalItemsCount={666}
        onChange={handlePageChange}
      />
      <ArtistList
        artists={artists}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default ArtistSearch;
