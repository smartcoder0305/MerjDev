import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LargeSpringboard from '../../components/LargeSpringboard';
import Jumbotron from '../../layouts/invest-in-merj/Jumbotron';
import JumbotronCapitalRaise from '../../layouts/invest-in-merj/JumbotronCapitalRaise';
import QuickLinksSection from '../../layouts/home/QuickLinksSection';
import WhyMerjSection from '../../layouts/invest-in-merj/WhyMerjSection';
import WhyMerjRegisterSection from '../../layouts/invest-in-merj/WhyMerjRegisterSection';
import KeyPrioritiesSection from '../../layouts/invest-in-merj/KeyPrioritiesSection';
import WhyMerjTextSection from '../../layouts/invest-in-merj/WhyMerjTextSection';
import WhyMerjInviteSection from "../../layouts/invest-in-merj/WhyMerjInviteSection";
import CoreOfferings from '../../layouts/invest-in-merj/CoreOfferings';
import SharesSection from '../../layouts/invest-in-merj/SharesSection';
import * as APIHelper from '../../utils/APIHelper';
import moment from 'moment';
import PageTabs  from '../../components/PageTabs';
import DealSummary from '../../layouts/invest-in-merj/sections/DealSummary';
import InvestmentTerms from '../../layouts/invest-in-merj/sections/InvestmentTerms';
import KeyFinancials from '../../layouts/invest-in-merj/sections/KeyFinancials';
import WhyMERJ from '../../layouts/invest-in-merj/sections/WhyMERJ';
import Opportunity from '../../layouts/invest-in-merj/sections/Opportunity';
import ExecutiveSummary from '../../layouts/invest-in-merj/sections/ExecutiveSummary';

export class InvestInMerj extends Component {

  constructor() {
    super();
    this.state = {
      countDownDate: "",
      loadedDate: false,
      shareData: {
        shares: "1.654m",
        sharePrice: "2.42",
        target: "4.00m",
        raised: "1.78m",
        percentageRaised: 0
      },
      jumbotronHeight: 0
    }

    this.jumbotronRef = React.createRef();
  }

  componentDidMount() {
    APIHelper.getDate().then((resolve) => {
      return resolve.json()
    }).then((response) => {
      var endDate = moment(response[0]['UTC-Date']);
      this.setState({ countDownDate: endDate, loadedDate: true });
    })

    APIHelper.fetchShares().then((resolve) => {
      return resolve.json();
    }).then((response) => {
      if(response[0]) {

        const data = response[0];
        
        let newData = {...this.state.shareData}
        newData.shares = data.TotalShares;
        newData.target = data.Target;
        newData.raised = data.FundsRaised;
        newData.sharePrice = data.SharePrice;
        newData.percentageRaised = data.PercentageRaised;


        this.setState({shareData: newData})
      }  

      })


  }

  returnClientHeight = (height) => {
    this.setState({jumbotronHeight: height});
  }

  render() {

    let sections = [
      {
        title: 'Deal Summary',
        id: 'DealSummary',
        content: <DealSummary/>,
        documents: [],
      },
      {
        title: 'Executive Summary',
        id: 'ExecutiveSummary',
        content: <ExecutiveSummary />,
        documents: [],
      },
      {
        title: 'Opportunity',
        id: 'Opportunity',
        content: <Opportunity />,
        documents: [],
      },
      {
        title: 'Why MERJ',
        id: 'WhyMERJ',
        content: <WhyMERJ />,
        documents: [],
      },
      {
        title: 'Key Financials',
        id: 'KeyFinancials',
        content: <KeyFinancials />,
        documents: [],
      },
      {
        title: 'Investment Terms',
        id: 'InvestmentTerms',
        content: <InvestmentTerms />,
        documents: [],
      }
    ];
    return (
        <main>
          {/* <Jumbotron returnClientHeight={this.returnClientHeight}/> */}

          <JumbotronCapitalRaise returnClientHeight={this.returnClientHeight}/>

          <br/>

          <QuickLinksSection />

          {/* <PageTabs JumbotronHeight={this.state.jumbotronHeight} pageTitle={"MERJ Security Token Offering"} sections={sections}/> */}

          {/* <SharesSection 
            TotalShares={this.state.shareData.shares}
            SharePrice={this.state.shareData.sharePrice}
            Target={this.state.shareData.target}
            Funds={this.state.shareData.raised}
            percentageRaised={this.state.shareData.percentageRaised}
          /> */}
{/* 
          <WhyMerjSection />

          <WhyMerjRegisterSection />

          <WhyMerjTextSection/>
          
          <LargeSpringboard
            subtitle="Global Securities &amp; Digital Asset Exchange"
            title="GLOBAL MARKET FREEDOM"
            buttonText="Invest Now"
            href="/invest-in-merj"
            hasCountdown={this.state.loadedDate ? !hasDeadLinePassed(this.state.countDownDate) : false}
            CountDownTitle="Capital Raise opens in"
          /> */}
          {/* <CoreOfferings/> */}
          {/* <KeyPrioritiesSection /> */}

          {/* <WhyMerjInviteSection /> */}
        </main>
    );
  }
}

export default InvestInMerj;
