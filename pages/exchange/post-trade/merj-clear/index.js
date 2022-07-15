import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/post-trade/merj-clear/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class MerjClear extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="MERJ Clear" />
          </div>

          <Page sections={SECTIONS} />
          <LargeSpringboard />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="Post Trade Summary"
              subtitle="Learn more about MERJ Clearing and Settlement Limited"
              href="/exchange/post-trade/summary"
              buttonText="Post Trade Summary"
            />

            <Springboard
              title="MERJ Dep"
              subtitle="Learn more about MERJ Depository and Settlement Limited"
              href="/exchange/post-trade/merj-dep"
              buttonText="MERJ Dep"
            />
          </div>
        </main>

    );
  }
}

export default MerjClear;
