import React from 'react';

import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';

import Button from '../Button';
import PropTypes from 'prop-types';
import {Countdown }from '../../utils/countdownTimer/index';
class LargeSpringboard extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render( ) {
    const app = JSON.parse(sessionStorage.getItem("configa"));
    const signupUrl = app.VenusUrl + "/" + "signup/Merj";
    return (
      <section className={`${styles.largeSpringboard}`}>
      <div className={`${helpers.paddedInner} animate`}>
        <h2>
          <small>Global Securities &amp; Digital Asset Exchange</small>
          GLOBAL MARKET FREEDOM
        </h2>


        <h2>
          <small>MERJ Exchange is an award winning global securities exchange for traditional and digital securities. Open an account online or contact us today to learn how you can participate.</small>
        </h2>

        {
          !this.props.hasCountdown  ?
          <Button text="CREATE ACCOUNT" handleClick={() => window.location.href = signupUrl} link={{ href: '/create-account' }}/>
          : null
        }


        {
          this.props.hasCountdown ? <Countdown CountDownTitle={this.props.CountDownTitle}/> : null
        }
      </div>
    </section>
  );
}
};

LargeSpringboard.propTypes = {
  hasCountdown: PropTypes.bool,
  CountDownTitle: PropTypes.string
};


LargeSpringboard.defaultProps = {
  hasCountdown: false,
  CountDownTitle: ""
};

export default LargeSpringboard;
