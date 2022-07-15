import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/regulation/member-regulation/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class MemberRegulation extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Member Regulation" />
          </div>
          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Market Regulation"
              subtitle="Learn more about the MERJ Exchange Market Regulation"
              href="/exchange/regulation/market-regulation"
              buttonText="Market Regulation"
            />

            <Springboard
              title="AML"
              subtitle="We are committed to adhere to the Seychelles AML laws and practices"
              href="/exchange/regulation/aml"
              buttonText="AML"
            />
          </div>
        </main>
    );
  }
}

export default MemberRegulation;
