import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/regulation/aml/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class AML extends Component {
  render() {
    return (
       <main>
        <div className={helpers.allowForPageNav}>
          <Jumbotron title="AML" />
        </div>

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Member Regulation"
              subtitle="Learn more about the MERJ Exchange Member Regulation"
              href="/exchange/regulation/member-regulation"
              buttonText="Member Regulation"
            />

            <Springboard
              title="Market Regulation"
              subtitle="Learn more about the MERJ Exchange Market Regulation"
              href="/exchange/regulation/market-regulation"
              buttonText="Market Regulation"
            />
          </div>
        </main>
    );
  }
}

export default AML;
