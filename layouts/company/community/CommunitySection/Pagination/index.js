import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function createPagesArr(pageCount, currentPage) {
  // Show the next 3 pages including the current page
  // FIXME: Could make this more declarative by passing in the array length, ie. I want to show X page buttons
  const pagesArr = [currentPage];
  const nextPage = currentPage + 1;
  const nextNextPage = nextPage + 1;

  if (nextPage <= pageCount) {
    pagesArr.push(nextPage);
  }

  if (nextNextPage < pageCount) {
    pagesArr.push(nextNextPage);
  }

  return pagesArr;
}

const Pagination = ({ pageCount, currentPage, handleClick }) => {
  const pagesArr = createPagesArr(pageCount, currentPage);
  const previousButtonComponent = currentPage > 1 && (
    <button
      type="button"
      className={styles.button}
      onClick={() => handleClick(currentPage - 1)}
      aria-label="Previous"
    >
      Prev
    </button>
  );
  const nextButtonComponent = currentPage !== pageCount && (
    <button
      type="button"
      className={styles.button}
      onClick={() => handleClick(currentPage + 1)}
      aria-label="Next"
    >
      Next
    </button>
  );
  const firstPageComponent = !pagesArr.includes(1) && (
    <div>
      <button
        type="button"
        className={styles.button}
        onClick={() => handleClick(1)}
        aria-label="First page"
      >
        1
      </button>
      {
        pagesArr.length > 2 ?
        <span className={styles.ellipsis}>...</span> : null
      }
    </div>
  );
  const lastPageComponent = !pagesArr.includes(pageCount) && (
    <div>
      <span className={styles.ellipsis}>...</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => handleClick(pageCount)}
        aria-label="Last page"
      >
        {pageCount}
      </button>
    </div>
  );

  return (
    <div className={styles.container}>
      {previousButtonComponent}

      {firstPageComponent}

      {pagesArr.map((page) => {
        const activeStyles = page === currentPage ? styles.active : null;

        return (
          <button
            key={page}
            type="button"
            className={`${styles.button} ${activeStyles}`}
            onClick={() => handleClick(page)}
            aria-label="page number"
          >
            {page}
          </button>
        );
      })}

      {lastPageComponent}

      {nextButtonComponent}
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  handleClick: PropTypes.func,
};
Pagination.defaultProps = {};

export default Pagination;
