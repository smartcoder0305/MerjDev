import React from 'react';

import styles from './styles.scss';
import helpers from '../../../../static/styles/helpers.scss';

const OurBackgroundSection = () => {
  return (
    <section className={`${styles.ourBackgroundWrapper} animate`}>
      <div className={helpers.paddedInner}>
        <h4>Our Background</h4>
        <div className={styles.ourBackgroundInner}>
          <div className={styles.left}>
            <p>
              MERJ Exchange Limited, formerly Trop-X (Seychelles) Limited, was incorporated in the
              Republic of Seychelles in 2011. The exchange went live in 2012.
            </p>
            <p>
            Over time, the MERJ founders and key strategic partners acquired a diverse and complimentary 
            range of skills, ranging from securities, regulations, banking, IT, fund administration, project
            management and other areas within financial services.
            </p>
          </div>

          <div className={styles.right}>
            <img
              src="/static/images/pages/about/about-merj/our-background-rebrand.png"
              alt="Trop-X MERJ"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

OurBackgroundSection.propTypes = {};
OurBackgroundSection.defaultProps = {};

export default OurBackgroundSection;
