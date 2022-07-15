import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const KeyComponentItem = ({ title, subtitle }) => {
  return (
    <div className={`${styles.keyComponentSingle} animate`}>
      <div className={styles.title}>{title}</div>
      <p>{subtitle}</p>
    </div>
  );
};

KeyComponentItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
KeyComponentItem.defaultProps = {};

export default KeyComponentItem;
