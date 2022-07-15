import React from 'react';
import Link from 'next/link';
import styles from './styles.scss';

export default class TransferTokensSection extends React.Component{
    constructor(){
        super()
        
        
    }
   
    render(){

        return(
        <section className={styles.contactWrapper}>
              <div className={styles.mobileScreen}>  
                <div>
                    <label>
                        <div className={styles.depositHeading}>Token Transfers</div>
                    </label>
                    <br />
                </div>
                <div>
                <p>MERJ allows for the deposit and withdrawal of eligible security tokens which, once processed, will be available in your account for trading on our market.</p>
                <br />
                <label>Depositing your security tokens</label>
                <p>If you would like to deposit your security tokens with MERJ, please click <a href="/deposit-tokens" target="_blank"><strong>here</strong></a>.</p>
                <br />
                <label>Withdrawing your security tokens</label>
                <p>If you would like to request a withdrawal of your security tokens from MERJ, please click <a href="/withdraw-tokens" target="_blank"><strong>here</strong></a>.</p>
                </div>
              </div>  
            </section>
        );
    }
}
