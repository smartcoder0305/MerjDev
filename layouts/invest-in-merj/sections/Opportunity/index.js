import React from 'react';
import styles from './styles.scss';

export default class Opportunity extends React.Component {
    constructor() {
        super();
        this.state = {
            dataReady: false
        }
    }

componentDidMount() {
    // window.scrollTo({ top: 650, behavior: 'smooth' });
    //     document.body.scrollTop = 0;
}

render(){

    if(this.state.dataReady)
         return null;

    return (
        <section className={styles.MarketOpportunityContainer}>
           <div className={styles.MarketOpportunityBackGround}>
               <div className = {styles.MarketOpportunity}>
                   <h2>The Market Opportunity</h2>
                   <h4>Asset Tokenisation:</h4>
                   <p>
                    The process of converting assets and rights into their digital representation or a token on a blockchain.
                   </p>
                   <p> Digital assets extend far beyond cryptocurrencies, ranging from securities to real estate, art, precious metals, healthcare data and more. 
                Research and surveys from institutions such as the World Economic Forum (WEF), Deloitte and McKinsey project that up to 10% of the global 
                Gross Domestic Product (GDP) will be stored and transacted with the help of blockchain technology by 2025–2027. </p>
                    <div className ={styles.MarketOpportunityStaticsImageContainer}>
                      <img src="/static/images/pages/invest-in-merj/MarketOpportunity.svg" alt="Asset Tokenisation" className={styles.MarketOpportunityStaticsImage}/>
                    </div>
               </div>

               
           </div>
           <br/>
           
           <div className={styles.MarketOpportunityInvestorIssuersContainer}>
           <hr/>
           <h3>Security Tokenisation Features/Benefits</h3>
           <img src="/static/images/pages/invest-in-merj/InvestorsIssuers.svg" alt="Security Tokenisation Features/Benefits" className={styles.MarketOpportunityInvestorIssuers}/>
           </div>
        </section>
    );
}

};
