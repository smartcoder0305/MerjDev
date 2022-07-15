import React from 'react';
import styles from './styles.scss';

export default class ExecutiveSummary extends React.Component {
    constructor() {
        super();
        this.state = {
            dataReady: false
        }
    }

    componentDidMount(){
        
    }

    render(){

         if(this.state.dataReady)
         return null;

        return (
            <section className={styles.ExecutiveSummary}>
                


                <div className={styles.introContainer}>
                    <div className={styles.ExecutiveSummaryContainer}>
                        <div className={styles.ExecutiveSummaryParagraph}>
                            <p>As the securities market of the Seychelles, we are a regulated market for equities, 
                                debt and derivatives and have successfully listed 33 securities with a market cap in
                                excess of $380m.</p>
                            <p>We have built a network of introducing brokers and members which reaches a user base of over 
                                300k individual investment accounts, and we have over 10k registered shareholders of MERJ listed securities.</p>
                            <p>We combine a licensed exchange, clearing house and depository to offer the complete end-to-end of the securities lifecycle.</p>
                        </div>
                        <div className={styles.ExecutiveSummaryImage}>
                            {/* <img src="../../../../static/images/pages/invest-in-merj/Executive Summary.jpg" alt="Girl in a jacket" className={styles.ExecutiveSummaryMerjImage}/> */}
                        </div>
                    </div>
                </div>
                <div className={styles.SecondaryContainer}>
                    <p>In 2016, we began focusing on how we could combine the end-to-end infrastructure we have with the exciting potential of blockchain and asset tokenisation. 
                        After extensive consultations with our regulator, we have successfully created a framework for digital assets which will allow us to list, trade, clear, settle and register crypto securities within our regulated infrastructure. 
                        In August 2019, we made history with the listing of the first tokenised security on a stock exchange globally. Having proven the rigour of the framework, we are now seeking to expand on this potential to become the only regulated market to  facilitate primary and secondary markets for digitized securities. 
                        The market opportunity is enormous and MERJ is leading the way globally. </p>
                    <p>Our tokenised IPO offers investors of all classes an opportunity to gain fully regulated USD exposure to our existing business as an alternative listing venue, 
                        but also to invest in key market infrastructure for the rapidly evolving world of tokenised assets and crypto securities. </p>
                </div>
            </section>
        );
    }

};
