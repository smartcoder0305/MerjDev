import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/market/derivatives/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class Derivatives extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Derivatives" />
          </div>

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="MERJ Primary"
              subtitle="Learn more about MERJ Primary"
              href="/exchange/market/merj-primary"
              buttonText="MERJ Primary"
            />

            <Springboard
              title="Market News"
              subtitle="Market related announcements and news"
              href="/about/news/?category=News"
              buttonText="Market News"
            />
          </div>
        </main>
    );
  }
}

export default Derivatives;
