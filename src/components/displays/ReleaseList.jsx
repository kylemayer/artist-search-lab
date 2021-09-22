import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import { Link } from 'react-router-dom';

const ReleaseList = ({ releases, artist }) => (
  <ul aria-label="releases">
    {releases.map((release) => (
      <li key={release.id}>
        <Link to={`/releases/${artist}/${release.id}`}>
          <Release id={release.id} title={release.title} cover={release.cover} />
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
      cover: PropTypes.string.isRequired,
    }).isRequired
  ),
  artist: PropTypes.string.isRequired,
};

export default ReleaseList;
