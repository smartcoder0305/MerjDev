import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import VideoThumbnail from '../../../components/VideoThumbnail';

const PromoVideoSection = () => {
  return (
    <section className={styles.container}>
      <div className={helpers.paddedInner}>
        <h4>Watch the promo</h4>

        <VideoThumbnail
          videoID="HTHiWhDbkEw"
          caption="Interview with Bobby Brantley Jr. CEO of MERJ EXCHANGE Limited"
          large
        />
      </div>
    </section>
  );
};

PromoVideoSection.propTypes = {};
PromoVideoSection.defaultProps = {};

export default PromoVideoSection;
