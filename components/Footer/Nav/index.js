import React from 'react';
import Link from 'next/link';
import { MdPhone as PhoneIcon } from 'react-icons/md';

import { app, routes } from '../../../config';
import styles from '../styles.scss';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.renderSupportSection = this.renderSupportSection.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderMenuColumn = this.renderMenuColumn.bind(this);
    this.renderNav = this.renderNav.bind(this);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  renderSupportSection() {
    return (
      <ul className={styles.supportSectionWrapper}>
        {Object.keys(app.contact).map((key) => {
          const value = app.contact[key];

          // Don't render the email link
          if (key === 'email') {
            return null;
          }

          if (key === 'telephone') {
            return (
              <li key={key}>
                <PhoneIcon />

                <a href={`tel:${value}`}>{value}</a>
              </li>
            );
          }

          return (
            <li key={key}>
              <a
                href={`https://maps.google.com/maps?q=${value}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  renderMenuItem(route) {
    return (
      <li key={route.title}>
        <Link href={route.href}>
          <div>{route.title}</div>
        </Link>
      </li>
    );
  }

  renderMenu(title, menuItemRoutes) {
    return (
      <div key={title}>
        <div className={styles.categoryHeader}>{title}</div>

        <ul>{menuItemRoutes.map((subRoute) => this.renderMenuItem(subRoute))}</ul>
      </div>
    );
  }

  renderMenuColumn(title, menuRoutes) {
    const shouldStack = !menuRoutes[0].routes ? true : null;
    const containerClasses = `${styles.megaNav} ${shouldStack && styles.simpleNav}`;

    return (
      <ul className={containerClasses}>
        {menuRoutes.map((route) => {
          // If there are nested sub-routes, render a menu item
          // Else render a Link with the href
          if (route.routes) {
            return <li key={route.title}>{this.renderMenu(route.title, route.routes)}</li>;
          }

          return this.renderMenuItem(route);
        })}
      </ul>
    );
  }

  renderNav(navRoutes) {
    /*
      If the route has sub-routes, render a menu
      Else if it is the Support route, render the support section
      Else just render a Link
    */
    return (
      <div className={styles.footerNavWrapper}>
        {navRoutes.map((route) => {
          if (route.routes) {
            return (
              <section key={route.title}>
                <div className={styles.sectionHeader}>{route.title}</div>

                {this.renderMenuColumn(route.title, route.routes)}
              </section>
            );
          }

          if (route.title === 'Enquiries') {
            return (
              <section key={route.title}>
                <div className={styles.sectionHeader}>{route.title}</div>

                {this.renderSupportSection()}
              </section>
            );
          }

          // Don't render the support section
          if (route.title === 'Support') {
            return null;
          }

          return (
            <div key={route.title}>
              <Link href={route.href}>
                <div>{route.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return <section>{this.renderNav(routes.nav)}</section>;
  }
}
