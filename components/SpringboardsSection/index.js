import React from 'react';

import helpers from '../../static/styles/helpers.scss';

import Springboard from '../Springboard';

const SpringboardsSection = () => {
  return (
    <div className={helpers.springboardsSibebySide}>
      <Springboard
        title="About MERJ"
        subtitle="Learn more about how we started and our vision"
        buttonText="ABOUT MERJ"
        href="/about/about-merj"
      />

      <Springboard
        title="News &amp; Announcements"
        subtitle="Latest news and Market announcements"
        buttonText="MERJ News"
        href="/about/news"
      />
    </div>
  );
};

SpringboardsSection.propTypes = {};
SpringboardsSection.defaultProps = {};

export default SpringboardsSection;
