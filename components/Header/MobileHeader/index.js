import React from 'react';
import Link from 'next/link';
import { MdMenu as MenuIcon, MdClose as CloseIcon, MdArrowDropDown as DropDownIcon } from 'react-icons/md';
import { GetAuthToken } from '../../../utils/CookieHelper';

import styles from './styles.scss';

import Nav from './Nav';

export default class MobileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleShowNav = this.toggleShowNav.bind(this);

    this.state = {
      showNav: false,
      showProfileNav: false,
      isLoggedIn: false
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    let isLoggedIn = GetAuthToken() !== "" && GetAuthToken() !== undefined && GetAuthToken() !== null;
    this.setState({ isLoggedIn});
  }



  toggleShowNav() {
    const { showNav, showProfileNav } = this.state;
    
    showProfileNav && !showNav? 
    this.setState({
      showNav: !showNav,
      showProfileNav: false
    }):
    this.setState({
      showNav: !showNav
    });  
  }


  toggleshowProfileNav = () => {
    const { showProfileNav, showNav } = this.state;

    showNav && !showProfileNav ?
    this.setState({
      showProfileNav: !showProfileNav,
      showNav: false
    }):
    this.setState({
      showProfileNav: !showProfileNav,
    });
  }


  render() {

    const { showNav, showProfileNav } = this.state;
    const {isLoggedIn, applicationComplete, app} = this.props;
    const menuIconComponent = showNav ? <CloseIcon /> : <MenuIcon />;
    const profileIconComponent = showProfileNav ? <div style={{marginLeft: "17px"}}><CloseIcon /></div> : <div className={styles.mobileDropdownIcon}>
      <svg mlns="http://www.w3.org/2000/svg" stroke-width="0" viewBox="0 0 15 24" height="1em" width="0.7em">
    <g id="Person_" data-name="Person " transform="translate(1332.25 -598)">
      <path id="Rectangle_1116" data-name="Rectangle 1116" d="M8.159,0h.4a8.159,8.159,0,0,1,8.159,8.159v0a3.205,3.205,0,0,1-3.205,3.205H3.205A3.205,3.205,0,0,1,0,8.159v0A8.159,8.159,0,0,1,8.159,0Z" transform="translate(-1332.25 607.635)" fill="#b4b6c6" />
      <circle id="Ellipse_41" data-name="Ellipse 41" cx="4.282" cy="4.282" r="4.282" transform="translate(-1328.174 598)" fill="#b4b6c6" />
    </g>
  </svg><DropDownIcon /></div>;
    const navComponent = showNav && (
      <div className={styles.navWrapper}>
        <Nav isLoggedIn={this.props.isLoggedIn} app={this.props.app} nav={showNav} />

        <button type="button" className={styles.navFillButton} onClick={this.toggleShowNav} />
      </div>
    );


    //profile nav component
    const profileNavComponent =showProfileNav && (
      <div className={styles.navWrapper}>
        {/* show the profile nav */}
        <Nav isLoggedIn={this.props.isLoggedIn} app={this.props.app} profileNav={showProfileNav} />
      <button type="button" className={styles.navFillButton} onClick={this.toggleshowProfileNav} />
        
      </div>
    );

    return (
      <header id="header" className={styles.mobileNav}>
        <div className={styles.mobileHeaderContainer}>
          <div>
            <button
              className={styles.mobileNavToggle}
              type="button"
              onClick={this.toggleShowNav}
              aria-label="Show menu"
            >
              {menuIconComponent}
            </button>
          </div>

          <div className={styles.mobileLogo}>
            <Link href="/">
              <img alt="MERJ Logo" src="/static/images/components/Header/merj-logo-small.svg" />
            </Link>
          </div>

          <div>
            {
              isLoggedIn && applicationComplete ? 
              <button
                className={styles.mobileNavToggle}
                type="button"
                onClick={this.toggleshowProfileNav}
                aria-label="Show menu"
              >
                {profileIconComponent}
              </button> : null
            }
          </div>

        </div>
        {navComponent}
        {profileNavComponent}
      </header>
    );
  }
}
