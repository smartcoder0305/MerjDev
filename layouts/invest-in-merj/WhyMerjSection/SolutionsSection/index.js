import React from 'react';
import PropTypes from 'prop-types';

import SOLUTIONS from './solutions';
import styles from './styles.scss';

import SolutionItem from './SolutionItem';

const SolutionsSection = () => {
  return (
    <div className={styles.solutionsWrapper}>
      {SOLUTIONS.map((solution, index) => {
        const isLastItem = index === SOLUTIONS.length - 1;

        return (
          <SolutionItem
            key={solution.title}
            {...solution}
            count={index + 1}
            isLastItem={isLastItem}
          />
        );
      })}
    </div>
  );
};

SolutionsSection.propTypes = {};
SolutionsSection.defaultProps = {};

export default SolutionsSection;
