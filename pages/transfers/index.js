import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PageTabs  from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';

import OnboardingBanner from '../../components/OnboardingBanner';
import * as APIHelper from '../../utils/APIHelper';
import TransferTokensSection from '../../layouts/TransferTokens'
import helpers from '../../static/styles/helpers.scss';


export default class TransferTokens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
    }

    render() {
        let sections = [
            {
                title: 'Banking Details',
                id: 'banking',
                content: < none/>,
                documents: [],
                url: '/banking'
            },
            {
                title: 'Make a Deposit',
                id: 'deposit',
                content: < none/>,
                documents: [],
                url: '/add-deposit'
            },
            
            {
                title: 'Withdrawals',
                id: 'withdrawals',
                content: < none />,
                documents: [],
                url: '/withdrawals'
            },
            {
                title: 'Token Transfers',
                id: 'transfertokens',
                content: < TransferTokensSection/>,
                documents: [],
                url: '/transfers'
            }
        ];

        return (
            <main>
                <Jumbotron title="Token Transfers"/>
                    <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections}/>
            </main>
        )
    }
}