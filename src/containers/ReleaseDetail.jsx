import React, { useState, useEffect } from 'react';
import SongList from '../components/displays/SongList';
import { getSongs } from '../services/fetchApi.js';
import { useParams } from 'react-router-dom';
import styles from '../components/styles/ReleaseDetail.css';

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
    <div className={styles.songlist}>
      <SongList songs={songs} artist={artist} />
    </div>
  );
};

export default ReleaseDetail;
