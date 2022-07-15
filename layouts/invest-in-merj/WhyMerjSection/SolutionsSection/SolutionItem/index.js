import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SolutionItem = ({ title, description, count }) => {
  return (
    <div className={styles.solutionItem}>
      <div className={styles.number}>{count}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

SolutionItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.number,
};
SolutionItem.defaultProps = {};

export default SolutionItem;
