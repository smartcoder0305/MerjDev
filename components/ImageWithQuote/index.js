import React from 'react';

import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';

const ImageWithQuote = () => {
  return (
    <section className={styles.quoteBanner}>
      <div className={`${helpers.paddedInner} animate`}>
        <div className={styles.inner}>
          “Seychelles lies at the heart of the old Indian Ocean trade routes which were traversed by
          Asian, Arab and African traders making it a fitting destination for a securities exchange”
        </div>
      </div>
    </section>
  );
};

ImageWithQuote.propTypes = {};
ImageWithQuote.defaultProps = {};

export default ImageWithQuote;
