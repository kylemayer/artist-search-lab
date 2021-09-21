import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ title, cover }) => (
  <figure>
    <img src={cover} alt={title} />
    <figcaption>
      <h3>{title}</h3>
    </figcaption>
  </figure>
);

Release.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Release;
