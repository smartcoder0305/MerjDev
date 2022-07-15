import React, { Component } from 'react';
import Header from '../../../../components/Header';
import helpers from '../../../../static/styles/helpers.scss';
import Footer from '../../../../components/Footer';

import styles from '../../../../layouts/enquiries/styles.scss';

import FaqSection from '../../../../layouts/enquiries/FaqSection';


export default class FAQ extends React.Component{
    render(){
        return(
                <main>
                    <div className ={helpers.paddedInner}>
                        <div>
                            <FaqSection />
                        </div>

                    </div>
                </main>
        )
    }
}