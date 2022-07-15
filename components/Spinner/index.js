import React from 'react';
import global from '../../static/styles/global.scss'
import styles from './styles.scss';

const Spinner = () => {
  return <div className={styles.spinner+' '+ global.spin} />;
};

Spinner.propTypes = {};
Spinner.defaultProps = {};

export default Spinner;
