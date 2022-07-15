import React from 'react';
import Link from 'next/link';
import {
  MdChevronRight as ChevronRightIcon,
  MdChevronLeft as ChevronLeftIcon,
} from 'react-icons/md';
import {DeleteCookie} from '../../../../utils/CookieHelper';
import { routes } from '../../../../config';
import styles from '../styles.scss';
import global from '../../../../static/styles/global.scss';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.onBackButtonClick = this.onBackButtonClick.bind(this);
    this.onMenuAnimationEnd = this.onMenuAnimationEnd.bind(this);
    this.setMenus = this.setMenus.bind(this);
    this.setMenuToAnimateOut = this.setMenuToAnimateOut.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderNav = this.renderNav.bind(this);

    this.state = {
      menus: [],
      menuToAnimateOut: null,
      app: {},
    };
  }

  static propTypes = {};

  static defaultProps = {};

  onMenuItemClick(route) {
    const { menus } = this.state;

    menus.push(route);

    this.setMenus(menus);
  }

  onBackButtonClick() {
    const { menus } = this.state;
    const currentMenu = menus[menus.length - 1];

    this.setMenuToAnimateOut(currentMenu);
  }

  onMenuAnimationEnd() {
    const { menus } = this.state;

    menus.pop();

    this.setMenus(menus);
    this.setMenuToAnimateOut(null);
  }

  setMenus(menus) {
    this.setState({
      menus,
    });
  }

  setMenuToAnimateOut(menuToAnimateOut) {
    this.setState({
      menuToAnimateOut,
    });
  }

  renderMenuItem(route) {
    // If the route has sub-routes, render a button
    // Else render a Link with the href
    if (route.routes) {
      return (
        <li key={route.title}>
          <div className={styles.navTierOne} onClick={() => this.onMenuItemClick(route)}>
            { route.title}

            <ChevronRightIcon className={styles.arrow} />
          </div>
        </li>
      );
    }
  
   
      return (
        <li style={{ 'marginLeft': '20px' }} key={route.title}>
          <Link href={route.href}>
            <div>{route.title}</div>
          </Link>
        </li>
      );   
    
}

  renderMenu(menu, level) {
    const { menuToAnimateOut } = this.state;
    const shouldAnimateOut = menuToAnimateOut && menuToAnimateOut.title === menu.title;
    const containerClasses = `${shouldAnimateOut ? global.slideOutLeft : global.slideInLeft} ${
      styles.menuContainer
    }`;
    
    const shouldHeightAdjust = menu.routes.length <= 3 ? false : true;
   
    
    return (
      <div key={menu.title} className={styles.secondaryNav}>
        <ul
          className={containerClasses}
          style={{ zIndex: level, height: shouldHeightAdjust ? 'fit-content' : 'auto' }}
          onAnimationEnd={shouldAnimateOut ? this.onMenuAnimationEnd : null}
        >
          <li>
            <div className={styles.backButton} onClick={this.onBackButtonClick}>
              <ChevronLeftIcon className={styles.arrow} />
              Back
            </div>
          </li>

          {menu.routes.map((route) => this.renderMenuItem(route))}
        </ul>
      </div>
    );
  }
  
  renderNav(navRoutes) {
    const {isLoggedIn, app} = this.props;
    let isOnApplication = window.location.pathname.includes('/create-account');
    const loginUrl = app.VenusUrl + "/" + "login/Merj";
    const venusUrl = app.VenusUrl + "/" + "signup/Merj";
    const signupUrl = venusUrl;
    return (
      <nav className={styles.slidefromleft}>
        <div className={styles.mainNav}>
          <ul>
            {navRoutes.map((route) => this.renderMenuItem(route))}
            {app.IsLoginEnabled && !isLoggedIn ? 
          <React.Fragment>
              <li style={{'marginLeft': '20px'}}>
              <Link href={loginUrl}>
                  <a>Login</a>
              </Link>
          </li>
          </React.Fragment> : app.IsLoginEnabled && isLoggedIn ?
          <li style={{'marginLeft': '20px'}} onClick={this.logout}> 
            <a> Logout </a>
          </li> 
              : null
             }


           {!isLoggedIn  ? <li>
             {
              isOnApplication ? <a className={styles.btn}> CREATE ACCOUNT </a> :
              <a className={styles.btn} href={signupUrl}>
                CREATE ACCOUNT
              </a>
             }
            </li> : null
           }
          </ul>
        </div>
      </nav>
    );
  }

  renderProfileNav(mobileRoutes){
    return(
        <nav className={styles.slidefromright}>
            <div className={styles.mainNav}>
                <ul>
                  {mobileRoutes.map((route) => this.renderMenuItem(route))}
                </ul>
            </div>
        </nav>
    )
  }

  
  logout = () => {
    DeleteCookie(this.state.props, 'Authorization', () => {
      window.location.assign('/login');
    });
  }

  

  render() {
    const {profileNav } = this.props;
    const { menus } = this.state;
    const containerClasses = `${global.fadeIn} ${styles.container}`;
    return (
      <div className={containerClasses}>
        {this.props.nav ? this.renderNav(routes.nav) : null}
        
        {profileNav ? 
          this.renderProfileNav(routes.mobileNav): null
        }

        {menus.length ? menus.map((menu, index) => this.renderMenu(menu, index + 1)) : null}
      </div>
    );
  }
}
