import React from 'react';

import styles from '../../enquiries/EnquiriesSection/styles.scss';

import ApplicationForm from '../../../components/ApplicationForm';
//import LoginFrom from '../../../components/LoginForm';

const ApplicationSection = () => {
  return (
    <section className={`${styles.formWrapper} animate`}>
      
      <ApplicationForm formType="application" />
    </section>
  );
};

ApplicationSection.propTypes = {};
ApplicationSection.defaultProps = {};

export default ApplicationSection;