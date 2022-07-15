import React from 'react';
import CurrencySelect from '../../../components/CountryCurrencyDropDown';
import * as APIHelper from '../../../utils/APIHelper';
import styles from '../styles.scss'
//Still some testing and work to be done here.
// Bitpay account inactive at the moment, waiting for it to be renabled to test again.

export default class BitPaySection extends React.Component {
    constructor() {
        super()
        this.state = {
            dataAvailable: false,
            next: false,
            currency: 'PAX',
            href: undefined,
            disableButton: true,
            environment: false
        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://bitpay.com/bitpay.js";
        script.async = true;
        document.body.appendChild(script);
        if (!this.state.href) {
            this.setState({
                href: "https://www.bitpay.com/cdn/en_US/bp-btn-pay-currencies.svg",
                dataAvailable: true
            });
        }
        APIHelper.GetConfig().then((app) => {
            this.setState({ ready: true, amount: "", currency: "PAX", environment: app.Environment });
        });

        const { next } = this.state

        if (next) {
            document.getElementById('linkClick').click()
        }

    }

    onSelect = (event) => {
        const value = event.target.value.value || event.target.value;
        this.setState({ currency: value });
    }
    onChange = (event) => {
        const value = event.target.value.value || event.target.value;
        this.setState({ amount: value, disableButton:  value !== "" && value > 0 ? false : true });
    }
    enableButton = () => {
        this.setState({ disableButton: false });
    }

    Next = () => {
        const { amount, currency, environment } = this.state;
        this.setState({ disableButton: true });
        if (amount === "" && currency === "") {
            return;
        }
        else {
            APIHelper.GetBitPayInvoiceId(amount, currency).then((response) => {
                if (response && response.Success) {

                    // There is no more test enviroment for bitpay as PAX/USDC is not supported by testnet as of yet.
                    // lets just leave this here in the case that one day testnet decides to be nice.
                    // if (environment.toLowerCase() !== 'prod') {
                    //     window.bitpay.enableTestMode();
                    // }

                    window.bitpay.showInvoice(response.Message);

                    bitpay.onModalWillLeave(() => {
                        this.enableButton();
                    });
                } else {
                    this.enableButton();
                }
            }).catch(err => {
                console.error(err)
            })
        }


    }

    render() {
        const { amount, currency, disableButton } = this.state;

        if (!this.state.dataAvailable) {
            return null;
        }

        return (
            <section>
                <div className={styles.bitContainer}>

                    
                <section>
                        <div>
                            <h4>Important Information:</h4>
                            <ol className={styles.depositInfo}>
                                <li> Please allow 1 business day for funds to be credited to your account. </li>
                                <li> Bitpay will charge a processing fee of 1%.   </li>
                                <li> Bitpay exchange rates can be found here: <a target="_blank" href="https://bitpay.com/exchange-rates/">https://bitpay.com/exchange-rates/</a></li>
                                <li> Depending on the cryptocurrency used, there will also be a transaction fee levied by the blockchain network. </li>
                                <li> Your transaction details will display the deposit amount in Paxos Standard (PAX). Paxos Standard is a regulated USD Stablecoin collateralised by the US Dollar. MERJ treats PAX 1:1 with USD and your account will be credited with USD.</li>
                            </ol>
                        </div>
                    </section>
                    
                    <div className={styles.bitItem}>
                        <label>
                            Deposit Amount (USD)
                            <input type='number' defaultValue={amount} onChange={(event) => this.onChange(event)} />
                        </label>
                    </div>
               



                    <div className={!disableButton ? styles.bitPayButtonContainer : styles.onPressed}>
                        <input disabled={this.state.disableButton} onClick={this.Next} className={styles.bitPayButton} type="image" src={this.state.href} alt="Pay with BitPay" />
                    </div>



                </div>
            </section>
        );
    }
}