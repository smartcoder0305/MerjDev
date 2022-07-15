import React, { Component } from 'react';
import Header from '../../components/Header';
import helpers from '../../static/styles/helpers.scss';
import styles from '../../layouts/enquiries/styles.scss';
import Footer from '../../components/Footer';

import WithdrawTokensSection from '../../layouts/TransferTokens/WithdrawTokensSection'

export default class WithdrawToken extends React.Component{
    
    render(){
        return(
                <main>
                    <div className={helpers.paddedInner}>
                        <div className={styles.contactWrapper}>
                            <WithdrawTokensSection />
                        </div>
                    </div>
                </main>
        );
    }

}