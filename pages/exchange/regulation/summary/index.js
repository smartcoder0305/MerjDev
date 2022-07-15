import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/regulation/regulation-summary/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class RegulationSummary extends Component {
  render() {
    return (
        <main>
          <Jumbotron title="Regulation" />

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Issuer Regulation"
              subtitle="Learn more about the MERJ Exchange Issuer Regulation"
              href="/exchange/regulation/issuer-regulation"
              buttonText="Issuer Regulation"
            />

            <Springboard
              title="Member Regulation"
              subtitle="Learn more about the MERJ Exchange Member Regulation"
              href="/exchange/regulation/member-regulation"
              buttonText="Member Regulation"
            />
          </div>
        </main>
    );
  }
}

export default RegulationSummary;
