import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/market/equities/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';
import Footer from '../../../../components/Footer';

export class Equities extends Component {
  render() {
    return (

        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Equities" />
          </div>

          <Page sections={SECTIONS} /> 

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Derivatives"
              subtitle="Learn more about the MERJ Exchange Listed Derivatives Market"
              href="/exchange/market/derivatives"
              buttonText="Derivatives"
            />

            <Springboard
              title="Debt"
              subtitle="Learn more about the Debt Market"
              href="/exchange/market/debt"
              buttonText="Debt"
            />
          </div>
        </main>

    );
  }
}

export default Equities;
