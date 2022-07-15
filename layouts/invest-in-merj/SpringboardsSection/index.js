import React from 'react';

import helpers from '../../../static/styles/helpers.scss';

import Springboard from '../../../components/Springboard';

const SpringboardsSection = () => {
  return (
    <div className={helpers.springboardsSibebySide}>
      <Springboard
        title="US Investors"
        subtitle="Meet the team behind MERJ and it’s advisors"
        href=""
        buttonText="INVEST NOW"
      />

      <Springboard
        title="Non-US Investors"
        subtitle="Meet the team behind MERJ and it’s advisors"
        href=""
        buttonText="INVEST NOW"
      />
    </div>
  );
};

SpringboardsSection.propTypes = {};
SpringboardsSection.defaultProps = {};

export default SpringboardsSection;
