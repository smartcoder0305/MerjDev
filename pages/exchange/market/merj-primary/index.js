import React, { Component } from 'react';
import Link from 'next/link';

import SECTIONS from '../../../../layouts/exchange/market/merj-primary/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Jumbotron from '../../../../components/Jumbotron';
import Header from '../../../../components/Header';
import Page from '../../../../components/Page';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class MerjPrimary extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="MERJ primary" />
          </div>

          <Page sections={SECTIONS} />

          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Market News"
              subtitle="Market related announcements and news"
              href="/about/news/?category=News"
              buttonText="Market News"
            />

            <Springboard
              title="Market Summary"
              subtitle="MERJ Exchange Listings and overview"
              href="/exchange/market/listings"
              buttonText="Market Summary"
            />
          </div>
        </main>
    );
  }
}

export default MerjPrimary;
