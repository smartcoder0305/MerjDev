import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PartnerItem = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} />
    </div>
  );
};

PartnerItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
PartnerItem.defaultProps = {};

export default PartnerItem;
