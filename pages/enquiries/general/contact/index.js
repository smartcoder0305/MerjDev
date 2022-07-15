import React, { Component } from 'react';
import Header from '../../../../components/Header';
import helpers from '../../../../static/styles/helpers.scss';
import Footer from '../../../../components/Footer';
import EnquiriesSection from '../../../../layouts/enquiries/EnquiriesSection' 

import styles from '../../../../layouts/enquiries/styles.scss';

import ContactUsSection from '../../../../layouts/enquiries/ContactUsSection';
import ContactSection from '../../../../layouts/enquiries/ContactSection';


export default class ContactUs extends React.Component{
    render(){
        return(
                <main>
                    <div className ={helpers.paddedInner}>
                        <div>
                            <ContactUsSection />

                            <ContactSection />

                            <EnquiriesSection />
                        </div>
                    </div>
                </main>
        )
    }
}