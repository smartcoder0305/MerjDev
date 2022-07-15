import React from 'react';

import VIDEOS from './videos';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import VideoThumbnail from '../../../components/VideoThumbnail';

const MoreVideosSection = () => {
  return (
    <section className={styles.container}>
      <div className={helpers.paddedInner}>
        <h4>More videos</h4>

        <div className={styles.videosContainer}>
          {VIDEOS.map((video, index) => {
            // Add a spacer to every item not the 3rd
            const spacerComponent = (index + 1) % 3 !== 0 && <div className={styles.spacer} />;

            return (
              <div className={styles.videoContainer} key={video.videoID}>
                <VideoThumbnail {...video} />

                {spacerComponent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

MoreVideosSection.propTypes = {};
MoreVideosSection.defaultProps = {};

export default MoreVideosSection;
