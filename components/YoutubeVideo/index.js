import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const YoutubeVideo = ({ videoID }) => {
  const url = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

  return (
    <div className={styles.wrapper}>
      <iframe
        title="Youtube Video"
        id="ytplayer"
        src={url}
        allowFullScreen
        className={styles.container}
      />
    </div>
  );
};

YoutubeVideo.propTypes = {
  videoID: PropTypes.string,
};
YoutubeVideo.defaultProps = {};

export default YoutubeVideo;
