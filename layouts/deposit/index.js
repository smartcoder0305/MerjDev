import React from 'react';
import EFTSection from './EFT';
import BitPaySection from './BitPay';
import styles from './styles.scss';
import USDCSection from './USDC';

export default class DepositSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOption: 'eft',
            hasBitPay: props.hasBitPay
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        
    }


    handleOptionChange(event){
        if(event) {

            this.setState({
                selectedOption: event.target.value
            });
        }

    }
   

    handlePage = () => {
        const {selectedOption, hasBitPay} = this.state;
        switch(selectedOption) {
            case 'eft':
                return (<EFTSection />);
            case 'bitpay':
                return (hasBitPay ?  <BitPaySection /> : <EFTSection />);
            case 'usdc':
                return (<USDCSection />);
            default:
                return (<EFTSection />);
        }
    }

    render(){

        return(
           <section className={styles.contactWrapper}>
              <div className={styles.mobileScreen}>  
                <div>
                    <label>
                        <div className={styles.depositHeading}>MAKE A DEPOSIT</div>
                    </label>

                    <br />
            
                        <div className={styles.depositSmallText}>Select Deposit Method</div>
                    
                </div>
               
                <div className={styles.radioContainer}>
                    <label>
                        <div className={styles.radioInputs}>
                            <input type="radio" onChange={this.handleOptionChange} value='eft' checked={this.state.selectedOption === 'eft'}/>Bank Transfer
                        </div>
                    </label>
                    {
                    this.state.hasBitPay ?  
                    <label>
                        <div className={styles.radioInputs}>
                            <input type="radio" onChange={this.handleOptionChange} value='bitpay'  checked={this.state.selectedOption === 'bitpay'}/>BitPay
                        </div>
                    </label> : null
                    } 
                    <label>
                        <div className={styles.radioInputs}>
                            <input type="radio" onChange={this.handleOptionChange} value='usdc'  checked={this.state.selectedOption === 'usdc'}/>USDC
                        </div>
                    </label>     
                </div> 
                 
                <div>
                {
                    this.handlePage()
                }
                </div>
              </div>  
            </section>
        );
    }
}
