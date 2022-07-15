import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import WithdrawalsContainer from './content';
import PageTabs  from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';


export class Withdrawals extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
 
  render() {
    let sections = [
      {
          title: 'Banking Details',
          id: 'banking',
          content: <none />,
          documents: [],
          url: '/banking'
      },
      {
        title: 'Make a Deposit',
        id: 'deposit',
        content: <none />,
        documents: [],
        url: '/add-deposit'
      }, 
      {
          title: 'Withdrawals',
          id: 'withdrawals',
          content: <WithdrawalsContainer />,
          documents: [],
          url: '/withdrawals'
      },
      {
        title: 'Token Transfers',
        id: 'transfertokens',
        content: < none/>,
        documents: [],
        url: '/transfers'
      }
    ];

    return (
        <main>

          <Jumbotron title={"WITHDRAW"} />
          <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections} />
        </main>
    );
  }
}

export default Withdrawals;