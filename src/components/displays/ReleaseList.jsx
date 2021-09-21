import React from 'react';
import PropTypes from 'prop-types';

const ReleaseList = ({ releases }) => (
  <ul aria-label="releases">
    {releases.map((release) => (
      <li key={id}>
        <Release id={release.id} title={release.title} />
      </li>
    ))}
  </ul>
);

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReleaseList;
