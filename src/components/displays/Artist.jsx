import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, type, area }) => (
  <figure>
    <figcaption>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{area}</p>
    </figcaption>
  </figure>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default Artist;
