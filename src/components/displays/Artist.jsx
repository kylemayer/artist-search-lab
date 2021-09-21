import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name }) => (
  <figure>
    <figcaption>
      <h3>{name}</h3>
    </figcaption>
  </figure>
);

Artist.propTypes = {
  name: PropTypes.string,

};

export default Artist;
