import React from 'react';
import PropTypes from 'prop-types';

const Lyric = ({ lyrics }) => (
  <div>
    <p>{lyrics}</p>
  </div>
);

Lyric.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default Lyric;
