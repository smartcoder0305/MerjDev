import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { routes } from '../../config';
import styles from './styles.scss';

import helpers from '../../static/styles/helpers.scss';

import Licenses from "./licences/index"

import Nav from './Nav';
import SocialSection from './SocialSection';
import AssociationsSection from '../AssociationsSection';
import { MdSettingsInputComponent } from 'react-icons/md';

const Footer = ({ router }) => {
  const { pathname } = router;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footer}>
      <div className={helpers.paddedInner}>

        <SocialSection />

        <section className={styles.partnersSectionWrapper}>
          <section className={styles.partnersSection}>
          <Link href="/exchange/regulation/summary">
            <div className={`${styles.sectionHeader} ${styles.partnersSectionHeader}`}>Regulatory Summary</div>
            </Link>
            <div className={styles.merjBrand}>

              <div className={`${styles.merjBrandSeperator} ${styles.merjBrand}`}>

                <div className={styles.footerLogo1}>
                    <Link href="/">
                    <img src="/static/images/IMF.jpg" alt="IMF Logo" className={styles.IMFlogo} />
                  </Link>
                </div>

                <div className={styles.footerLogo2}>
                    <Link href="/">
                    <img src="/static/images/FSA.jpg" alt="FSA Logo" className={styles.FSAlogo} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Licenses/>
        </section>
        <AssociationsSection/>
      </div>
     
      <section className={styles.utilitiesList}>
        <div className={helpers.paddedInner}>
          <ul>
            {routes.footer.map((route) => {
              const { title, href, link } = route;

              if (link) {
                return (
                  <li key={title}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.anchor}
                    >
                      {title}
                    </a>
                  </li>
                );
              }

              const isMenuItemActive = href === pathname;

              return (
                <li key={title} className={`${isMenuItemActive && styles.activeMenuItem}`}>
                  <Link href={href}>
                    <div>{title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div>
            <div>Copyright © {year} MERJ Exchange. All rights reserved</div>
          </div>
        </div>
      </section>
    </div>
  );
};

Footer.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
Footer.defaultProps = {};

export default withRouter(Footer);
