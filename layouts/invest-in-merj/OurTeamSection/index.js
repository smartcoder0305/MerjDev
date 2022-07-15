import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import Thing from '../../../components/Thing';
import DirectorsSection from '../../../components/DirectorsSection';

const OurTeamSection = () => {
  return (
    <section className={styles.ourTeamWrapper}>
      <div className={styles.ourTeamMembers}>
        <DirectorsSection />
      </div>
    </section>
  );
};

OurTeamSection.propTypes = {};
OurTeamSection.defaultProps = {};

export default OurTeamSection;
