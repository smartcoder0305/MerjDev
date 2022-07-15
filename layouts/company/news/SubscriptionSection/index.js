import React from 'react';

import SubscriptionForm from '../../../../components/SubscriptionForm';

const SubscriptionSection = () => {
  return (
    <div>
      <SubscriptionForm
        mailChimpFormName="info"
        titleText="Join our mailing list"
        subtitleText="Get monthly updates on what’s happening at MERJ."
      />
    </div>
  );
};

SubscriptionSection.propTypes = {};
SubscriptionSection.defaultProps = {};

export default SubscriptionSection;
