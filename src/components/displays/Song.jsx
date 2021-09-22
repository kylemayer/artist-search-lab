import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ title }) => (
  <div>
    <h3>{title}</h3>
  </div>
);

Song.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Song;
