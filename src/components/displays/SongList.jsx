import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { Link } from 'react-router-dom';

const SongList = ({ songs, artist }) => (
  <ul aria-label="songs">
    {songs.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/releases/${artist}/${id}`}>
          <Song id={id} title={title}  />
        </Link>
      </li>
    ))}
  </ul>
);

SongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  artist: PropTypes.string,
};

export default SongList;
