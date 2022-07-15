import React, { Component } from 'react';

import helpers from '../../static/styles/helpers.scss';
// FIXME: Should come from helpers

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles.scss';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Router from 'next/router';
export default class InvestNow extends Component {
  
  constructor() {
    super();
    this.state = {
     
    }
  }

  componentDidMount() {
    document.addEventListener('fa.investnow.success', function(e){
      var InvestorInvestmentID = e.investment_id;
    });
  }



  render() {
    return (
     
        <main className={styles.investNow}>
          <div className={helpers.paddedInner}>
            <h1>MERJ IPO: U.S. Accreditation</h1>


            <p>Before approving your account and investment with MERJ, you must also complete the Fund America onboarding process to be verified as an accredited U.S. investor. </p>

             <a style={{textDecoration: "none !important"}}  data-fa-invest-now="JzRnwpcLwafqu35fgmKkq47oYFs7_R85:2EW647UrT_SfcFUkUa1oqg"><Button>Fund America</Button></a>

          </div>
        
        
        
        </main>
    );
  }
}
