import React from 'react';
import Link from 'next/link';
import global from '../../../static/styles/global.scss'
import styles from './styles.scss';
import Nav from './Nav';

const DesktopHeader = (props) => {
  return (
    <header id="header" className={styles.desktopNav}>
      <div className={`${styles.merjLogo} ${global.slidefromleft}`}>
        <Link href="/">
          <img alt="MERJ Logo" src="/static/images/logo.svg" />
        </Link>
      </div>

      <Nav app={props.app} isLoggedIn={props.isLoggedIn} applicationComplete={props.applicationComplete}/>
    </header>
  );
};

DesktopHeader.propTypes = {};
DesktopHeader.defaultProps = {};

export default DesktopHeader;
