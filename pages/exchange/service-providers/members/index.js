import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/service-providers/members/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';
import Footer from '../../../../components/Footer';

export class Members extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Members" />
          </div>

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Listing Sponsors"
              subtitle="Learn more about the MERJ listing framework"
              href="/exchange/service-providers/listing-sponsors"
              buttonText="Listing Sponsors"
            />

            <Springboard
              title="Ecosystem"
              subtitle="Learn more about the global financial market ecosystem MERJ is building"
              href="/exchange/service-providers/ecosystem"
              buttonText="Ecosystem"
            />
          </div>
        </main>
    );
  }
}

export default Members;
