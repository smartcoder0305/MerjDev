import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const DirectorItem = ({ imageSrc, name, title, linkedinURL }) => {
  return (
    <div className={styles.directorSingle}>
      <div className={styles.directorImage}>
        <img src={imageSrc} alt={name} />
      </div>

      <div className={styles.directorName}>{name}</div>

      <div className={styles.directorTitle}>{title}</div>

      {/* <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
        <img src="/static/images/social/linkedin-square.png" alt="Linked In" />
      </a> */}
    </div>
  );
};

DirectorItem.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  linkedinURL: PropTypes.string,
};
DirectorItem.defaultProps = {};

export default DirectorItem;
