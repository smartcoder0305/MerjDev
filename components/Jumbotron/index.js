import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';

import Breadcrumbs from '../Breadcrumbs';
import Thing from '../Thing';

const Jumbotron = ({ title, subtitle, secondary }) =>{ 

    const thingComponent = !secondary && <Thing />;
  
    const subtitleComponent = subtitle && (
      <Fragment>
        <div className={styles.subText}>{subtitle}</div>
  
        {thingComponent}
      </Fragment>
    );
    return (
        <section className={`${styles.jumboTronWrapper} ${secondary ? styles.secondary : null}`} >
          <div className={`${helpers.paddedInner} animate`}>
            <Breadcrumbs secondary={secondary} />

            <h1>{title}</h1>

            {subtitleComponent}
          </div>
      </section>
    );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  secondary: PropTypes.bool,
};
Jumbotron.defaultProps = {};

export default Jumbotron;
