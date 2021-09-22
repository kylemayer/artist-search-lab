import React, { useState, useEffect } from 'react';
import SongList from '../components/displays/SongList';
import { getSongs } from '../services/fetchApi.js';
import { useParams } from 'react-router-dom';

const ReleaseDetail = () => {
  const { id, artist } = useParams();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs(id)
      .then((res) => setSongs(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <SongList songs={songs} artist={artist} />
    </>
  );
};

export default ReleaseDetail;
