import React from 'react';
import PropTypes from 'prop-types';
import './Paginate.scss';

const Paginate = (props) => {
  const { currentPage, totalPages, paginate } = props;
  return (
    <>
      <span className="pageCount">
        {currentPage} - {totalPages}
      </span>
      <button
        className={currentPage > 1 ? 'paginate-button' : 'paginate-button disable'}
        onClick={() => paginate('prev')}
      >
        prev
      </button>
      <button
        className={currentPage === totalPages ? 'paginate-button disable' : 'paginate-button'}
        onClick={() => paginate('next')}
      >
        next
      </button>
    </>
  );
};

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Paginate;
