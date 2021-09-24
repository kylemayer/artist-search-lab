import React from 'react';
import PropTypes from 'prop-types';

const Paginate = ({ artists, offSet, updateOffset }) => {
  return (
    <>
      <button onClick={() => updateOffset(-25)} disabled={offSet === 0}>
        &larr;
      </button>
      <button onClick={() => updateOffset(25)} disabled={artists.length < 25}>
        &rarr;
      </button>
    </>
  );
};

Paginate.propTypes = {
  offSet: PropTypes.number.isRequired,
  updateOffset: PropTypes.func.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Paginate;
