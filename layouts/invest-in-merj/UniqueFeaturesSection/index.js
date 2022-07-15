import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import Thing from '../../../components/Thing';
import FeaturesSection from './FeaturesSection';
import Button from '../../../components/Button';
import AssociationsSection from '../../../components/AssociationsSection';

// FIXME: This is very similar to the InvestmentOpportunitiesSection (component)
const UniqueFeaturesSection = () => {
  return (
    <section className={styles.uniqueFeaturesWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
        <h1>Unique features &amp; benefits</h1>

        <Thing />

        <FeaturesSection />

        <div className={`${styles.investStripCTA} animate`}>
          <h3>Invest now</h3>

          <div className={styles.overridesWrapper}>
            <div className={styles.buttonsWrapper}>
              <Button text="US INVESTORS" />

              <Button text="NON-US INVESTORS" />
            </div>

            <AssociationsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

UniqueFeaturesSection.propTypes = {};
UniqueFeaturesSection.defaultProps = {};

export default UniqueFeaturesSection;
