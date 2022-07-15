import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/post-trade/merj-dep/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import LargeSpringboard from '../../../../components/LargeSpringboard';
import Springboard from '../../../../components/Springboard';

export class MerjDep extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="MERJ Depository" />
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
              title="MERJ Clear"
              subtitle="Learn more about MERJ Depository and Settlement Limited"
              href="/exchange/post-trade/merj-clear"
              buttonText="MERJ Clear"
            />
          </div>
        </main>

    );
  }
}

export default MerjDep;
