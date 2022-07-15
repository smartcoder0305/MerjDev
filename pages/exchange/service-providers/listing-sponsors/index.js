import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/service-providers/listing-sponsors/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';
import Footer from '../../../../components/Footer';

export class ListingSponsors extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Listing Sponsors" />
          </div>

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Ecosystem"
              subtitle="Learn more about the global financial market ecosystem MERJ is building"
              href="/exchange/service-providers/ecosystem"
              buttonText="Ecosystem"
            />

            <Springboard
              title="ISIN"
              subtitle="Learn more about the International Securities Identification Number"
              href="/exchange/service-providers/isin"
              buttonText="ISIN"
            />
          </div>
        </main>
    );
  }
}

export default ListingSponsors;
