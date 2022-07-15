import React from 'react';

import PARTNERS from './partners';
import helpers from '../../static/styles/helpers.scss';
import styles from './styles.scss';

import PartnerItem from './PartnerItem';

const PartersSection = () => {
  return (
    <section className={`${styles.container} animate`}>
      <div className={helpers.paddedInner}>
        <h2 className={helpers.componentHeader}>Advisors, Providers, Partners and Affiliates</h2>

        <div className={styles.itemsContainer}>
          {PARTNERS.map((partner) => {
            const { src } = partner;

            return (
              <div key={src} className={styles.itemContainer}>
                <PartnerItem {...partner} />

                <div className={styles.spacer} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

PartersSection.propTypes = {};
PartersSection.defaultProps = {};

export default PartersSection;
