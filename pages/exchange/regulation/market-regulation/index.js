import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/regulation/market-regulation/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class MarketRegulation extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="market Regulation" />
          </div>
          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="AML"
              subtitle="We are committed to adhere to the Seychelles AML laws and practices"
              href="/exchange/regulation/aml"
              buttonText="AML"
            />

            <Springboard
              title="Regulation Summary"
              subtitle="MERJ Exchange Regulation Overview"
              href="/exchange/regulation/summary"
              buttonText="Regulation Summary"
            />
          </div>
        </main>
    );
  }
}

export default MarketRegulation;
