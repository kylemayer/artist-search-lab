/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists, searchTerm }) => {

  if (searchTerm && !artists.length)
    return <h4>No artists available</h4>;

  return (
    <ul aria-label="artists">
      {artists.length > 0 && artists.map((artist) => (
        <li key={artist.id}>
          <Artist {...artist} />
        </li>
      ))}
    </ul>
  );
};

const artistsProp = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })
);

ArtistList.propTypes = {
  artists: artistsProp,
  searchTerm: PropTypes.string,
};

export default ArtistList;
