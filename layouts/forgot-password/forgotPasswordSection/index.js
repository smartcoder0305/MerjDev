import React from 'react';

import styles from '../../login/loginSection/styles.scss';

import ForgetPasswordForm from '../../../components/ForgetPasswordForm';

const ForgetPasswordSection = () => {
  return (
    <section className={`${styles.formWrapper} animate`}>
      <ForgetPasswordForm formType="login" />
    </section>
  );
};

ForgetPasswordSection.propTypes = {};
ForgetPasswordSection.defaultProps = {};

export default ForgetPasswordSection;