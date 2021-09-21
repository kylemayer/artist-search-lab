import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ title }) => (
  <figure>
    <img></img>
    <figcaption>
      <h3>{title}</h3>
    </figcaption>
  </figure>
);

Release.propTypes = {
  title: PropTypes.string,
};

export default Release;
