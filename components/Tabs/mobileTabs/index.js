import React from 'react';
import Link from 'next/link';
import {
    MdChevronRight as ChevronRightIcon,
    MdChevronLeft as ChevronLeftIcon,
} from 'react-icons/md';
import { DeleteCookie, GetAuthToken } from '../../../utils/CookieHelper';
import nav from './fields';
import styles from './styles.scss';
import global from '../../../static/styles/global.scss';
import Router from 'next/router';
import * as APIHelper from '../../../utils/APIHelper';

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
            isLoggedIn: false,
            app: {},
            ptUrl: "",
            applicationCompleted: false,
            hasAccount: false
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
        const { isBankingAccountAvailable, isUSACitizen } = this.props;
        if (route.routes) {
            return (
                <li key={route.title}>
                    <div className={styles.navTierOne} 
                    onClick={() => this.onMenuItemClick(route)}
                    >
                        {route.left ? null : route.title}

                        <ChevronRightIcon className={styles.arrow} />
                    </div>
                </li>
            );
        }
        if(route.title === "Withdrawals" && !isBankingAccountAvailable){
            return;
        }
        if(route.title === "Deposit" && isUSACitizen){
            return; 
        }else{
            if(route.title === "Trade") {
                if(this.state.app.IsPTLoginEnabled && this.state.hasAccount) {
                  return (
                  <li style={{ 'marginLeft': '20px' }} key={route.title}>
                    <Link >
                        <a href={this.state.ptUrl} target="_blank"> <div>{route.title}</div></a>
                    </Link>
                  </li>
                  )
                } else {
                  return null;
                }
            }else{
                return (
                    <li style={{ 'marginLeft': '20px' }} key={route.title}>
                        <Link href={route.href}>
                            <div>{route.title}</div>
                        </Link>
                    </li>
                );
            }    
        }
    }

    renderMenu(menu, level) {
        const { menuToAnimateOut } = this.state;
        const shouldAnimateOut = menuToAnimateOut && menuToAnimateOut.title === menu.title;
        const containerClasses = `${shouldAnimateOut ? global.slideOutLeft : global.slideInLeft} ${
            styles.menuContainer
            }`;
   
        const shouldHeightAdjust = menu.routes.length <= 2 ? false : true;
        
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
        const { app } = this.state;
        return (
            <nav>
                <div className={styles.mainMenu}>
                    <ul>
                        {navRoutes.map((route) => this.renderMenuItem(route))}
                    </ul>
                </div>
            </nav>
        );
    }


    logout = () => {
        DeleteCookie(this.state.props, 'Authorization', () => {
            window.location.assign('/login');
        });
    }

    componentDidMount() {
        let isLoggedIn = GetAuthToken() !== "" && GetAuthToken() !== undefined && GetAuthToken() !== null;
        this.setState({ isLoggedIn });
        APIHelper.GetPTUrl().then((resolve) => {
            return resolve.json();
          }).then((res) => {
              APIHelper.GetConfig().then((app) => {
                let ptUrl = res.Data.PTDownloads.LiveWebStationUrl;
                let url = `${ptUrl}?token=${window.localStorage.Authorization}`;
                if(isLoggedIn) {
                  APIHelper.GetClientStatus().then((resolve) => {
                    let status = resolve.Data.State;
                    let applicationCompleted = false;
                    let hasAccount = false;
                    
                    if(status && status === 'ApplicationCompletedState'|| status && status === "FicaDocumentsAcceptedState" || status && status ===  "FundsReceivedAndAllocatedState" || status && status === "SharesReceivedState") {
                      applicationCompleted = true;
                    }

                    if(status && (status === "FundsReceivedAndAllocatedState" || status === "SharesReceivedState" || status === "RefundprocessedState" || status === "FicaDocumentsAcceptedState")) {
                        hasAccount = true;
                    }
                    this.setState({ready: true, app, ptUrl: url, applicationCompleted, hasAccount});
                  })
                } else {
                  this.setState({ready: true, app, ptUrl: url, applicationCompleted: false, hasAccount: false});
                }
      
            });
        });
    }

    render() {
        const { menus } = this.state;
        const containerClasses = `${global.fadeIn} ${styles.container}`;

        return (
            <div className={containerClasses}>
                {this.renderNav(nav)}

                {menus.length ? menus.map((menu, index) => this.renderMenu(menu, index + 1)) : null}
            </div>
        );
    }
}
