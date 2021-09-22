import React, { useState, useEffect } from 'react';
import ReleaseList from '../components/displays/ReleaseList';
import { getReleases } from '../services/fetchApi.js';
import { useParams } from 'react-router-dom';
import styles from '../components/styles/ArtistDetail.css';

const ArtistDetail = () => {
  const { id, artist } = useParams();
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getReleases(id)
      .then((res) => setReleases(res))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className={styles.releaselist}>
      <ReleaseList releases={releases} artist={artist} />
    </div>
  );
};

export default ArtistDetail;
