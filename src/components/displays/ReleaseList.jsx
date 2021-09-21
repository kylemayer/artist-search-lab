import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import { Link } from 'react-router-dom';

const ReleaseList = ({ releases }) => (
  <ul aria-label="releases">
    {releases.map((release) => (
      <li key={release.id}>
        <Link to={`/${release.id}`}>
          <Release id={release.id} title={release.title} />
        </Link>
      </li>
    ))}
  </ul>
);

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ReleaseList;
