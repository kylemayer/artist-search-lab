import React, { useState, useEffect } from 'react';
import { getArtists } from '../services/fetchApi.js';

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

    if (loading) return <h3>Loading...</h3>;

    return (
        <>

        </>
);

};

export default ArtistSearch;
