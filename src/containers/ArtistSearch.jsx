import React, { useState, useEffect } from 'react';
import { getArtists } from '../services/fetchApi.js';
import Search from '../components/controls/Search';
import ArtistList from '../components/displays/ArtistList';

const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    const loadArtists = async () => {
      const artistsFromApi = await getArtists();
      setArtists(artistsFromApi);
      setLoading(false);
    };

    loadArtists();
  }, []);

  useEffect(() => {
    setFilteredArtists(
      artists.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <ArtistList
        artists={artists}
        searchTerm={searchTerm}
        filteredArtists={filteredArtists}
      />
    </>
  );
};

export default ArtistSearch;
