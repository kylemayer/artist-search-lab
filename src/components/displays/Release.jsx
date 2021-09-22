import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/Resources.css';

const Release = ({ title, cover }) => (
  <figure>
    <img src={cover} alt={title} width="300px" />
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
