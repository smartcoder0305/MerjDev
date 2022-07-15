import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PageTabs  from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';

import OnboardingBanner from '../../components/OnboardingBanner';
import * as APIHelper from '../../utils/APIHelper';
import DepositSection from '../../layouts/deposit'
import helpers from '../../static/styles/helpers.scss';


export default class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasBitPay: false,
            dataReady: false
        }
    }


    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
        APIHelper.GetConfig().then((config) => {
            this.setState({
                hasBitPay: config.HasBitPay,
                dataReady: true
            });
        });
    }

    render() {

        if(!this.state.dataReady)
            return null;

        let sections = [
            {
                title: 'Banking Details',
                id: 'banking',
                content: <asdasd/>,
                documents: [],
                url: '/banking'
            },
            {
                title: 'Make a Deposit',
                id: 'deposit',
                content: <DepositSection hasBitPay={this.state.hasBitPay}/>,
                documents: [],
                url: '/add-deposit'
            },

            {
                title: 'Withdrawals',
                id: 'withdrawals',
                content:  < none/>,
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
                    <Jumbotron title="Fund Your Account"/>
                        <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections}/>
                </main>
        )
    }
}