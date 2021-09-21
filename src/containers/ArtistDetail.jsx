import React, { useState, useEffect } from 'react';
import { getReleases } from '../services/fetchApi.js';
import { useParams } from 'react-router-dom';

const ArtistDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getReleases(id)
      .then((res) => setReleases(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>

    </>
  );
};

export default ArtistDetail;
