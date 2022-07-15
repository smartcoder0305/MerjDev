import React, { Component } from 'react';

import SECTIONS from '../../../../layouts/exchange/post-trade/summary/sections';
import helpers from '../../../../static/styles/helpers.scss';

import Header from '../../../../components/Header';
import Jumbotron from '../../../../components/Jumbotron';
import Page from '../../../../components/Page';
import Springboard from '../../../../components/Springboard';
import Footer from '../../../../components/Footer';

export class PostTradeSummary extends Component {
  render() {
    return (
        <main>
          <div className={helpers.allowForPageNav}>
            <Jumbotron title="Post Trade Summary" />
          </div>

          <Page sections={SECTIONS} />

          <div className={helpers.springboardsSibebySide}>
            <Springboard
              title="MERJ Clear"
              subtitle="Learn more about MERJ Clearing and Settlement Limited"
              href="/exchange/post-trade/merj-clear"
              buttonText="MERJ Clear"
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

export default PostTradeSummary;
