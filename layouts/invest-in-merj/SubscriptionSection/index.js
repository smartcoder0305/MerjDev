import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import Thing from '../../../components/Thing';
import SubscriptionForm from '../../../components/SubscriptionForm';

const SubscriptionSection = () => {
  return (
    <section id="subscription-form" className={styles.subsribeFormSection}>
      <div className={`${helpers.paddedInner} animate`}>
        <h1>Stay informed</h1>

        <Thing />

        <SubscriptionForm
          mailChimpFormName="tokenSale"
          titleText="Enter you email address for updates on the MERJ Securities Token Offering (STO)"
        />
      </div>
    </section>
  );
};

SubscriptionSection.propTypes = {};
SubscriptionSection.defaultProps = {};

export default SubscriptionSection;
