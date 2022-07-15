import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import PlayButton from '../PlayButton';
import Lightbox from '../Lightbox';
import YoutubeVideo from '../YoutubeVideo';

export default class VideoThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.setShowLightbox = this.setShowLightbox.bind(this);

    this.state = {
      showLightbox: false,
    };
  }

  static propTypes = {
    videoID: PropTypes.string,
    caption: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {};

  setShowLightbox(showLightbox) {
    this.setState({
      showLightbox,
    });
  }

  render() {
    const { showLightbox } = this.state;
    const { videoID, caption, large } = this.props;
    const lightboxComponent = showLightbox && (
      <Lightbox handleClose={() => this.setShowLightbox(false)}>
        <YoutubeVideo videoID={videoID} />
      </Lightbox>
    );

    return (
      <div className={`${styles.wrapper} animate`}>
        <button
          type="button"
          onClick={() => this.setShowLightbox(true)}
          className={`${styles.container} ${large && styles.largeContainer}`}
        >
          <PlayButton />
        </button>

        <div className={styles.caption}>{caption}</div>

        {lightboxComponent}
      </div>
    );
  }
}
