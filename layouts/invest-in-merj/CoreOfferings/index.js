import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

const CoreOfferings = () => {
  return (
    <section className={styles.keyPrioritiesWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
      <h3>Our Core Offering</h3>

        <ul>
          <li>Primary and secondary markets equity, debt and derivative securities, including securities tokens, digital assets and hybrid instruments</li>
          <li>Listing, trading, clearing, settlement, registry and depository services</li>
          <li>Global deal promotion, issuance and distribution platform for compliant global securities token offerings</li>
          <li>Direct participation and access to exchange and post trade for global participants </li>
          <li>Interoperability with other markets across the globe to support cross listings</li>
          <li>Fully fledged national securities exchange means securities qualify as “listed” for investment mandates</li>
          <li>Multi-currency settlement in major fiat, set to expand to stable coins, major cryptocurrencies</li>
        </ul>
      </div>
    </section>
  );
};

CoreOfferings.propTypes = {};
CoreOfferings.defaultProps = {};

export default CoreOfferings;
