import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/market/debt/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Springboard from '../../../../components/Springboard';
import Footer from '../../../../components/Footer';

export class Debt extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Debt" />
          </div>

          <Page sections={SECTIONS} />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Derivatives"
              subtitle="Learn more about the MERJ Exchange Listed Derivatives Market"
              href="/exchange/market/derivatives"
              buttonText="Derivatives"
            />

            <Springboard
              title="MERJ Primary"
              subtitle="Learn more about MERJ Primary"
              href="/exchange/market/merj-primary"
              buttonText="MERJ Primary"
            />
          </div>
        </main>
    );
  }
}

export default Debt;
