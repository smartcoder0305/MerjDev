import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { MdArrowDropDown as DropDownIcon} from 'react-icons/md';
import {DeleteCookie, GetAuthToken} from '../../../../utils/CookieHelper';
import { routes } from '../../../../config';
import Router from 'next/router';
import styles from '../styles.scss';
import global from '../../../../static/styles/global.scss';
import * as APIHelper from '../../../../utils/APIHelper';

export class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.setMenu = this.setMenu.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.renderMenuColumn = this.renderMenuColumn.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.renderProfileNav = this.renderProfileNav.bind(this);

    this.state = {
      menu: null,
      isLoggedIn: false,
      app: {},
      hasAccount: false
    };
  }

  static get propTypes() {
    return {
      router: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    };
  }

  static defaultProps = {};


  onMenuItemClick(route) {
    const { menu } = this.state;

    if (menu) {
      // Menu is open
      if (route.title !== menu.title) {
        // Open a different menu and close the previous one
        this.setMenu(route);
      } else {
        // Else just close it
        this.setMenu(null);
      }
    } else {
      // Menu is closed, let's open it by setting the menu type
      this.setMenu(route);
    }
  }

  setMenu(menu) {
    this.setState({
      menu,
    });
  }

  renderMenuItem(route) {
    const { menu } = this.state;
    const { router } = this.props;
    const { pathname } = router;
    const isMenuItemActive = pathname.indexOf(route.title.toLowerCase()) > -1;

    // If the route has sub-routes, render a button
    // Else render a Link with the href
    if (route.routes) {
      return (
        <li key={route.title} className={isMenuItemActive ? styles.activeMenuItem : null}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => this.onMenuItemClick(route)}
            onKeyDown={() => this.onMenuItemClick(route)}
          >
            {route.left?<span dangerouslySetInnerHTML={{__html: route.title}} />:route.title}

            <DropDownIcon className={styles.dropdownArrow} />
          </div>

          {menu && menu.title === route.title && this.renderMenu(menu)}
        </li>
      );
    }
    return (
      <li onClick={() => this.setMenu(null)} key={route.title} className={isMenuItemActive ? styles.activeMenuItem : null}>
        <Link href={route.href}>
          <div>{route.title}</div>
        </Link>
      </li>
    );
  }

  renderMenuColumn(title, menuItemRoutes) {
    return (
      <div className={styles.menuColumn} key={title}>
        <div className={styles.columnHeader}>{title}</div>

        <ul className={styles.columnMenu}>
          {menuItemRoutes.map((subRoute) => {
          
              return (
                <li onClick={() => this.setMenu(null)} key={subRoute.title}>
                  <Link  href={subRoute.href} as={subRoute.as}>
                    <div>{subRoute.title}</div>
                  </Link>
                </li>
              );
            
          })}
        </ul>
      </div>
    );
  }

  renderMenu(menu) {
    const shouldStack = !menu.routes[0].routes ? true : null;
    const left = menu.left;
    const containerClasses = left? `${styles.rightdropdownMenu} ${shouldStack && styles.simpleDropdownMenu}` : `${styles.dropdownMenu} ${shouldStack && styles.simpleDropdownMenu} `;

    return (
      <ul className={containerClasses}>
        {menu.routes.map((route) => {
          // If there are nested sub-routes, render a menu column
          // Else render a Link with the href
          if (route.routes) {
            return <li key={route.title}>{this.renderMenuColumn(route.title, route.routes)}</li>;
          }

          return (
            <li onClick={() => this.setMenu(null)} key={route.title}>
              <Link href={route.href} as={route.as}>
                <div>{route.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  renderNav(navRoutes) {
    return (
      <ul className={`${styles} ${global.slidefromleft}`}>
        {navRoutes.map((route) => this.renderMenuItem(route))}
      </ul>
    );
  }

  renderProfileNav(navRoutes) {
    return (
      <ul className={`${styles} ${global.slidefromright}`}>
        {
          navRoutes.map((route) => {
          return this.renderMenuItem(route)
        })
          }
      </ul>
    );
  }

  logout = () => {
    DeleteCookie(this.context, 'Authorization', () => {
      window.location.assign("/login");
    });
  }

  handleSignup = (app) => {
    const venusUrl = app.VenusUrl + "/" + "signup/Merj"
      window.location.href = venusUrl;
  }

  render() {
    const { applicationComplete, isLoggedIn, app } = this.props;
    const { menu } = this.state;
    const menuWrapperComponent = menu && (
      <button type="button" onClick={() => this.setMenu()} className={styles.menuWrapper} />
    );
      let isOnApplication = window.location.pathname.includes('/create-account');
      const loginUrl = app.VenusUrl + "/" + "login/Merj";

    return (
      <nav>
        {menuWrapperComponent}

        {this.renderNav(routes.nav)}

        <ul className={`${styles.actionNav} ${global.slidefromright} `}>

          {!isLoggedIn?         
          <React.Fragment>
            {app.IsLoginEnabled ?
              <li>
                  <a href={loginUrl} className={styles.btn}>Login</a>
          </li> : null}           
          </React.Fragment> :
          <li onClick={this.logout}> 
            <a className={styles.btn}> Logout </a>
          </li>
             }
          {!isLoggedIn  ? <li> {isOnApplication ? <button disabled={isOnApplication}  type="button" className={styles.btn} aria-label="Invest">
                    CREATE ACCOUNT
                  </button> :
                  <button onClick={() => this.handleSignup(app)}  type="button" className={styles.btn} aria-label="Invest">
                    CREATE ACCOUNT
                  </button>
                }
          </li> : null}   
          <React.Fragment>
             {
               isLoggedIn && applicationComplete ?
               <li>
                  <span className={styles.rightSpan}> 
                    
                  </span>
                  {menuWrapperComponent} 
                {
                   this.renderProfileNav(routes.profileNav)
                }
               </li> 
               : 
                null    
             }
          </React.Fragment>   
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
