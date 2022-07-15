import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const KeyPriorityItem = ({ title, subtitle }) => {
  return (
    <div className={`${styles.keyPrioritiesSingle} animate`}>
      <div className={styles.title}>{title}</div>
      <p>{subtitle}</p>
    </div>
  );
};

KeyPriorityItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
KeyPriorityItem.defaultProps = {};

export default KeyPriorityItem;
