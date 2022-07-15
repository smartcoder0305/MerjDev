import React from 'react';

import OPPORTUNITIES from './opportunities';
import styles from './styles.scss';

import OpportunityItem from './OpportunityItem';

const OpportunitiesSection = () => {
  return (
    <ul className={styles.OpportunitiesWrapper}>
      {OPPORTUNITIES.map((item) => {
        return (
          <li key={item.title}>
            <OpportunityItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

OpportunitiesSection.propTypes = {};
OpportunitiesSection.defaultProps = {};

export default OpportunitiesSection;
