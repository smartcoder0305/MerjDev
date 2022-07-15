import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const OpportunityItem = ({ imageSrc, title, subtitle }) => {
  return (
    <div className={`${styles.inner} animate`}>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

OpportunityItem.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
OpportunityItem.defaultProps = {};

export default OpportunityItem;
