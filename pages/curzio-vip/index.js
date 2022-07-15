import React, { Component } from 'react';
import Header from '../../components/Header';
import helpers from '../../static/styles/helpers.scss';
import styles from '../../layouts/enquiries/styles.scss';
import Footer from '../../components/Footer';

import CurzioVipSection from '../../layouts/TransferTokens/CurzioVipSection'

export default class CurzioVip extends React.Component{
    
    render(){
        return(
                <main>
                    <div className={helpers.paddedInner}>
                        <div className={styles.contactWrapper}>
                            <CurzioVipSection />
                        </div>
                    </div>
                </main>
        );
    }

}