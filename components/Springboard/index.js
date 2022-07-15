import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';

import Button from '../Button';

const Springboard = ({ title, subtitle, href, buttonText }) => {
  return (
    <section className={styles.mediumSpringboard}>
      <div className={`${helpers.paddedInner} animate`}>
        <h2>{title}</h2>

        <p>{subtitle}</p>

        <Button secondary text={buttonText} link={{ href }} />
      </div>
    </section>
  );
};

Springboard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  href: PropTypes.string,
  buttonText: PropTypes.string,
};
Springboard.defaultProps = {};

export default Springboard;
