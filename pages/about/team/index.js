import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import Jumbotron from '../../../components/Jumbotron';
import DirectorsSection from '../../../components/DirectorsSection';
import SpringboardsSection from '../../../components/SpringboardsSection';
import Footer from '../../../components/Footer';

import TeamSection from '../../../layouts/company/team/TeamSection';

import withRouteMeta from '../../../enhancers/withRouteMeta';

const Team = ({ routeMeta }) => {
  const { title, description } = routeMeta;

  return (
      <main>
        <Jumbotron title={title} subtitle={description} />

        <DirectorsSection />

        <SpringboardsSection />
      </main>
  );
};

Team.propTypes = {
  routeMeta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default withRouteMeta(Team);
