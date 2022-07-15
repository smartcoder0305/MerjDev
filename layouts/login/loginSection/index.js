import React from 'react';

import styles from '../../enquiries/EnquiriesSection/styles.scss';

import LoginForm from '../../../components/LoginForm';

const LogInSection = () => {
  return (
    <section className={`${styles.formWrapper} animate`}>
      <LoginForm  />
    </section>
  );
};

LogInSection.propTypes = {};
LogInSection.defaultProps = {};

export default LogInSection;