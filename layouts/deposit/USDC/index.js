import React from 'react';
import CurrencySelect from '../../../components/CountryCurrencyDropDown';
import * as APIHelper from '../../../utils/APIHelper';
import styles from '../styles.scss'


export default class USDCSection extends React.Component {
    constructor() {
        super()
        this.state = {
            dataAvailable: false,
            next: false,
            currency: '',
            href: undefined,
            disableButton: false,
            environment: false
        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://commerce.coinbase.com/v1/checkout.js?version=201807";
        script.async = true;
        document.body.appendChild(script);

    }


    render() {

        return (
            <section>
                <div className={styles.bitContainer}>
          
                <section>
                        <div>
                            <h4>Important Information:</h4>
                            <ol className={styles.depositInfo}>
                                <li> Please allow 1 business day for funds to be credited to your account.  </li>
                                <li> MERJ does not charge any fees for the deposit.      </li>
                                <li> There will also be a transaction fee (i.e. “gas”) levied by the blockchain network. </li>
                                <li> Please do not send any asset other than USDC to the address provided as these will not be credited to your account. </li>
                                <li> For more information regarding USDC, please visit <a href="https://www.circle.com/en/usdc" target="_blank">www.circle.com/en/usdc</a>. </li>
                                <li> Coinbase Commerce will charge a processing fee of 1% or as displayed on <a href="https://commerce.coinbase.com/?lang=en" target="_blank">https://commerce.coinbase.com/?lang=en</a>. </li>
                            </ol>
                        </div>
                    </section>
                    
                    <div>
            <br/>
                <p className={styles.depositInfo}>Please click on the  <strong>Deposit USDC</strong>  button below to deposit USD using the Stablecoin USD Coin (USDC) issued by the regulated US-based firm Circle. Your account will be credited with 1 USD for every 1 USDC deposited.</p>
                 <br/>

                        <a className={styles.btn} target="_blank" href="https://commerce.coinbase.com/checkout/d322c2d8-ce2c-49ec-99e9-825df7639f29"> 
                            Deposit USDC 
                        </a> 

                        
                    </div>



                </div>
            </section>
        );
    }
}