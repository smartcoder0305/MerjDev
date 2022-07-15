import React, {Component} from 'react';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import helpers from '../../../../static/styles/helpers.scss';

import MarketHoursSection from '../../../../layouts/enquiries/market/MarketHours';
import styles from '../../../../layouts/enquiries/styles.scss';


export default class MarketHours extends React.Component{

    render(){
        return (
                <main>
                    <div className={helpers.paddedInner}>
                        <div>
                            <MarketHoursSection />
                        </div>
                    </div>
                </main>
        );
    }
}
