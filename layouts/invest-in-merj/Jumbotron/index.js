import React from 'react';
import Router from 'next/router';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';
import Button from '../../../components/Button';
import * as APIHelper from '../../../utils/APIHelper';
// import CountdownSection from './CountdownSection';
// import Button from '../../../components/Button';
import moment from 'moment';


import {hasDeadLinePassed } from '../../../utils/countdownTimer/index';

export default class Jumbotron extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      countDownDate: new Date(),
      loadedDate: false
    }

    this.ref = React.createRef();
  }


  componentDidMount() {

    this.props.returnClientHeight(this.ref.clientHeight/2 + 35);

    APIHelper.getDate().then((resolve) => {
      return resolve.json()
    }).then((response) => {
      var endDate = moment(response[0]['UTC-Date']);
      this.setState({ countDownDate: endDate, loadedDate: true });
    })
  }


  render() {
    const app = JSON.parse(sessionStorage.getItem("configa"));
    const signupUrl = app.VenusUrl + "/" + "signup/Merj";
  return (
    <section className={styles.wrapper} ref={ref => this.ref = ref}>
      <div className={styles.container}>
        <div className={`${helpers.paddedInner} animate`}>
          <div className={styles.Intro}>
            <h1>INVEST IN MERJ - NEXT GENERATION DIGITAL SECURITIES EXCHANGE</h1>

            <p>
              MERJ is combining trusted regulation with the flexibility of the blockchain, giving early investors a unique opportunity to be a part of the future of digital assets.
            </p>

                      <p><strong>Take part in the future of financial markets, invest in MERJ</strong></p>
                      <br></br>

              {
                this.state.loadedDate ? hasDeadLinePassed(this.state.countDownDate) ?
                <Button handleClick={() => window.location.href = signupUrl} text='CREATE ACCOUNT' link={{ href: signupUrl }}/> : 
                <Button text='enquire Now ' href='/enquiries/general/enquiries'/> : null
              }

          </div>

          {/* <div className={styles.innerBox}>
          <div className={styles.countdownWrapper}>
            <CountdownSection />
          </div>

          <div className={styles.investActionsWrapper}>
            <div className={styles.title}>Invest Now</div>
            <div className={styles.buttonsWrapper}>
              <Button text="US INVESTORS" />

              <Button text="NON-US INVESTORS" />
              <div className={styles.associationOverrides}>
                <AssociationsSection />
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      {/* <div className={helpers.paddedInner}>
        <div className={styles.row}>
          <div className={styles.column}>
            <p>
              <small>
                MERJ will be listing as a Security Token on itself to become the first unrestricted
                security token listing on a national exchange. This presents investors with the
                unique opportunity to secure a shareholding and participate in the MERJ growth story
                from its origins.
              </small>
            </p>
          </div>

          <div className={styles.spacer} />
          <div className={styles.column}>
            <p>
              <small>
                Interested parties should <a href="/enquiries/general/enquiries">submit their details here</a>{' '}
                and will be informed of the details relating to the Security Token Offering and when
                it is open for investment.
              </small>
            </p>
          </div>
        </div>
      </div> */}


    </section>
  );
    }
};

