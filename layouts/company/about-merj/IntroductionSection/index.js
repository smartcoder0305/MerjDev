import React from 'react';

import styles from './styles.scss';
import helpers from '../../../../static/styles/helpers.scss';

const IntroductionSection = () => {
  return (
    <section className={styles.introductionSection}>
      <div className={`${helpers.paddedInner}`}>
        <h4>Introduction</h4>
        <div className={styles.columnsWrapper}>
          <p>
            MERJ Exchange Limited is the operator of MERJ Exchange, the only licensed securities
            exchange in the Republic of Seychelles. MERJ has established and administers rules for the listing, trading, clearing and settlement
            of securities and other financial instruments.
          </p>
          <p>
            MERJ Exchange Limited and its wholly owned group companies collectively operate the
            entire end-to-end exchange and post trade infrastructure, covering exchange, clearing,
            settlement, registry and depository services. This relatively unique set-up, along with
            the years of close collaboration and trust built with our regulators, has paved the way
            for MERJ to be an innovator and global leader in the exchange space.
          </p>
          <p>
            Global trade is in the DNA of Seychelles, making it a fitting location for a global
            exchange. Seychelles lies at the heart of the old Indian Ocean trade routes which were
            traversed by Asian, Arab and African traders for centuries. Seychelles now boasts a
            modern international financial services portfolio, a forward thinking financial services
            regulator, low taxes, fibre optic connectivity and more, making it the ideal location
            from which to operate a modern, global exchange.
          </p>
          <p>
            We invite you to join us in building a new 21st century global financial market
            ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
