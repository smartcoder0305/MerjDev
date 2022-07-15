import React from 'react';

import VISION_ITEMS from './visionItems';
import styles from './styles.scss';
import helpers from '../../../../static/styles/helpers.scss';

import Thing from '../../../../components/Thing';

const OurVisionSection = () => {
  return (
    <section className={styles.ourVisionWrapper}>
      <div className={helpers.paddedInner}>
        <div className={`${styles.ourVisionIntro} animate`}>
          <h1>Our Vision</h1>
          <p>
            MERJ is pioneering the next generation of global financial markets leveraging blockchain
            technology to create the world’s first truly global, direct access end-to-end regulated
            exchange built for the consumers of financial markets, issuers and investors.
          </p>
          <Thing />
        </div>

        <ul className={`${styles.ListItemMargin} animate`}>
          {VISION_ITEMS.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

OurVisionSection.propTypes = {};
OurVisionSection.defaultProps = {};

export default OurVisionSection;
