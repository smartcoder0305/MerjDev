import React, { Component } from 'react';
import { MdWarning as DropDownIcon } from 'react-icons/md';

import helpers from '../static/styles/helpers.scss';

import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';

export class Error extends Component {
  static get propTypes() {
    return {};
  }

  render() {
    return (
      <div className={helpers.errorPageContainer}>
          <div className={helpers.errorPage}>
            <div className={helpers.paddedInner}>
              <div className={helpers.errorInner}>
                <div className={helpers.errorLogo}>
                  <img src="/static/images/logo-broken.svg" alt="MERJ Error" />
                </div>
                <h1>Sorry, we couldn&apos;t find that page.</h1>
                <p>
                  The page you&apos;re searching for doesn&apos;t exist anymore, either it has been
                  moved or the link is broken.
                </p>
              </div>
              <div>
                <Button text="CONTACT US" ghost light link={{ href: '/enquiries/general/contact' }} />

                <Button text="RETURN TO HOME PAGE" secondary link={{ href: '/' }} />
              </div>

              {/* <div className={helpers.errorDisclaimer}>
                <DropDownIcon className={helpers.errorIcon} />
                <p>
                  This website is currently in development.
                  <br />
                  Bugs and errors may be frequent.
                </p>
              </div> */}
            </div>
          </div>
      </div>
    );
  }
}

export default Error;
