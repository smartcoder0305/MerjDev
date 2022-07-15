import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PlayButton = ({ handleClick, url }) => {
  const imageComponent = (
    <img alt="Play Button" src="/static/images/components/PlayButton/play-button-large.png" />
  );

  if (handleClick) {
    return (
      <button type="button" onClick={handleClick} className={styles.button} aria-label="Play video">
        {imageComponent}
      </button>
    );
  }

  if (url) {
    return (
      <a className={styles.button} href={url} target="_blank" rel="noopener noreferrer">
        {imageComponent}
      </a>
    );
  }

  return <div className={styles.button}>{imageComponent}</div>;
};

PlayButton.propTypes = {
  handleClick: PropTypes.func,
  url: PropTypes.string,
};
PlayButton.defaultProps = {};

export default PlayButton;
