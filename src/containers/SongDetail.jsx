import React, { useState, useEffect } from 'react';
import Lyric from '../components/displays/Lyric';
import { getLyrics } from '../services/fetchApi.js';
import { useParams } from 'react-router-dom';
import styles from '../components/styles/SongDetail.css';

const SongDetail = () => {
  const { title, artist } = useParams();
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    getLyrics(artist, title)
      .then((res) => setLyrics(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className={styles.songdetail}>
      <Lyric lyrics={lyrics} />
    </div>
  );
};

export default SongDetail;
