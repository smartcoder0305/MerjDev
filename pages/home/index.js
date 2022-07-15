import React, { Component } from 'react';

import Header from '../../components/Header';
import PartnersSection from '../../components/PartnersSection';
import LargeSpringboard from '../../components/LargeSpringboard';
import Springboard from '../../components/Springboard';
import Footer from '../../components/Footer';

import Jumbotron from '../../layouts/home/Jumbotron';
import QuickLinksSection from '../../layouts/home/QuickLinksSection';
import NewsSection from '../../layouts/home/NewsSection';
import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';
import Router from 'next/router';

import * as APIHelper from '../../utils/APIHelper';
import moment from 'moment';
import {hasDeadLinePassed } from '../../utils/countdownTimer/index';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      countDownDate: "",
      loadedDate: false
    }
  }

  componentDidMount() {

    APIHelper.getDate().then((resolve) => {
      return resolve.json()
    }).then((response) => {
      var endDate = moment(response[0]['UTC-Date']);
      this.setState({ countDownDate: endDate, loadedDate: true });
    })
  }

  searchNews = (query) => {
    this.setState({query})
  }

  search = () =>  {
    Router.push({
      pathname: '/about/news',
      query: { query: this.state.query },
    })
  }

  render() {
    return (
        <main>
          <Jumbotron hasDeadLinePassed={hasDeadLinePassed(this.state.countDownDate)} />


          <QuickLinksSection />
            {/* a change */}
          <LargeSpringboard
            subtitle="Global Securities &amp; Digital Asset Exchange"
            title="GLOBAL MARKET FREEDOM"
            buttonText="Invest Now"
            href="/invest-in-merj"
            hasCountdown={this.state.loadedDate ? !hasDeadLinePassed(this.state.countDownDate) : false}
            CountDownTitle="Capital Raise opens in"
          />

          <div className={styles.quickSearchContainerHome}>
            <div className={styles.quickSearchLabelHome}>LOOKING FOR SOMETHING?</div>
            <div className={styles.quickSearchHome}><input onChange={(e) => {this.searchNews(e.target.value)}}/><div className={styles.searchBtnHome}><button  onClick={() => {this.search()}}> SEARCH </button></div></div>
          </div>


          <NewsSection />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Team &amp; Advisors"
              subtitle="Meet the team behind MERJ and its advisors"
              buttonText="Team and Advisors"
              href="/about/team"
            />

            <Springboard
              title="News &amp; Announcements"
              subtitle="Latest news and Market announcements"
              buttonText="MERJ News"
              href="/about/news"
            />


          </div>
          <PartnersSection />
        </main>

    );
  }
}

export default Home;
