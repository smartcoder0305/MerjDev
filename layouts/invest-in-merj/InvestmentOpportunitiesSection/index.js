import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import Thing from '../../../components/Thing';
import OpportunitiesSection from './OpportunitiesSection';
import Button from '../../../components/Button';
import AssociationsSection from '../../../components/AssociationsSection';

const InvestmentOpportunitiesSection = () => {
  return (
    <section className={styles.investmentOpWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
        <h1>Investment opportunities</h1>

        <Thing />

        <OpportunitiesSection />

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

InvestmentOpportunitiesSection.propTypes = {};
InvestmentOpportunitiesSection.defaultProps = {};

export default InvestmentOpportunitiesSection;
