import React, { Fragment } from 'react';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = (props) => {
  return (
    <Fragment>
      <DesktopHeader app={props.app} isLoggedIn={props.isLoggedIn} applicationComplete={props.applicationComplete}/>
      <MobileHeader app={props.app} isLoggedIn={props.isLoggedIn} applicationComplete={props.applicationComplete} />
    </Fragment>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
