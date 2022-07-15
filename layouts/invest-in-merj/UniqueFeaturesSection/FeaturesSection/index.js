import React from 'react';

import FEATURES from './features';
import styles from './styles.scss';

import FeatureItem from './FeatureItem';

const FeaturesSection = () => {
  return (
    <ul className={styles.FeaturesWrapper}>
      {FEATURES.map((item) => {
        return (
          <li key={item.title}>
            <FeatureItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

FeaturesSection.propTypes = {};
FeaturesSection.defaultProps = {};

export default FeaturesSection;
