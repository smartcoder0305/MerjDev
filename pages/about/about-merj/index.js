import React from 'react';
import PropTypes from 'prop-types';

import helpers from '../../../static/styles/helpers.scss';

import Header from '../../../components/Header';
import Jumbotron from '../../../components/Jumbotron';
import ImageWithQuote from '../../../components/ImageWithQuote';
import LargeSpringboard from '../../../components/LargeSpringboard';
import Springboard from '../../../components/Springboard';
import Footer from '../../../components/Footer';

import IntroductionSection from '../../../layouts/company/about-merj/IntroductionSection';
import Map from '../../../layouts/company/about-merj/Map';
import OurBackgroundSection from '../../../layouts/company/about-merj/OurBackgroundSection';
import OurVisionSection from '../../../layouts/company/about-merj/OurVisionSection';
import TheCompanySection from '../../../layouts/company/about-merj/TheCompanySection';
import CorporateResponsibilitySection from '../../../layouts/company/about-merj/CorporateResponsibilitySection';

import withRouteMeta from '../../../enhancers/withRouteMeta';

const AboutMerj = ({ routeMeta }) => {
  const { title, description } = routeMeta;

  return (
      <main>
        <Jumbotron title={title} subtitle={description} />

        <IntroductionSection />

        <Map />

        <OurBackgroundSection />

        <ImageWithQuote />

        <OurVisionSection />

        <TheCompanySection />

        <CorporateResponsibilitySection />

        <LargeSpringboard />

        <div className={helpers.springboardsSibebySide}>
          <Springboard
            title="Team &amp; Advisors"
            subtitle="Meet the team behind MERJ and its advisors"
            buttonText="TEAM AND ADVISORS"
            href="/about/team"
          />

          <Springboard
            title="News &amp; Announcements"
            subtitle="Latest news and Market announcements"
            buttonText="MERJ NEWS"
            href="/about/news"
          />
        </div>
      </main>
  );
};

AboutMerj.propTypes = {
  routeMeta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default withRouteMeta(AboutMerj);
