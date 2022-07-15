import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/service-providers/isin/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class ISIN extends Component {
  render() {
    return (
      <main>
          <Jumbotron title="ISIN" />

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Members"
              subtitle="Learn more about the MERJ Exchange Members"
              href="/exchange/service-providers/members"
              buttonText="Members"
            />

            <Springboard
              title="Listing Sponsors"
              subtitle="Learn more about the MERJ listing framework"
              href="/exchange/service-providers/listing-sponsors"
              buttonText="Listing Sponsors"
            />
          </div>
        </main>
    );
  }
}

export default ISIN;
