import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/service-providers/ecosystem/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class Ecosystem extends Component {
  render() {
    return (
        <main>
          <Jumbotron title="Ecosystem" />

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="ISIN"
              subtitle="Learn more about the International Securities Identification Number"
              href="/exchange/service-providers/isin"
              buttonText="ISIN"
            />

            <Springboard
              title="Members"
              subtitle="Learn more about the MERJ Exchange Members"
              href="/exchange/service-providers/members"
              buttonText="Members"
            />
          </div>
        </main>
    );
  }
}

export default Ecosystem;
