import React, { Component } from 'react';
import Header from '../../../../components/Header';
import helpers from '../../../../static/styles/helpers.scss';
import styles from '../../../../layouts/enquiries/styles.scss';
import Footer from '../../../../components/Footer';

import EnquiriesSection from '../../../../layouts/enquiries/EnquiriesSection'

export default class Enquiries extends React.Component{
    
    render(){
        return(
                <main>
                    <div className={helpers.paddedInner}>
                        <div className={styles.contactWrapper}>
                            <EnquiriesSection />
                        </div>
                    </div>
                </main>
        );
    }

}