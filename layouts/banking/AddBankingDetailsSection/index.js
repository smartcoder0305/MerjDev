import React from 'react';
import Button from '../../../components/Button';
import BankingForm from './bankingForm';
import helpers from '../../../static/styles/helpers.scss'
import  styles  from '../styles.scss';

class AddBankingDetailsSection extends React.Component{
    constructor(){
        super();
        this.state = {
            addButtonClicked: false
        }
    }
    handleOpenForm = ()=>{
        this.setState({addButtonClicked: true});
    }

    formRender=()=>{
        return(
            <section>
                <div className={helpers.paddedInner}>
                    <div className={styles.contactWrapper}>
                        <h1>My Banking Details</h1>
                        <div>Please fill the form below in order to make withdrawals.</div>
                        <BankingForm />
                    </div>
                </div>
            </section>
        );
    }

    render(){
        const { addButtonClicked }  = this.state;
        return(
            <section className={!addButtonClicked ? styles.mobileScreen : null}>
                {
                    !addButtonClicked ? 
                    <div>
                        <h1 >My Banking Details</h1>
                        <div>Add your bank account details in order to make withdrawals.</div>
                        <Button text="Add Bank Account" secondary handleClick={this.handleOpenForm}/>
                    </div>
                    :
                        this.formRender()
                }
            </section>
        )
    }

}
AddBankingDetailsSection.propTypes = {};
AddBankingDetailsSection.defaultProps = {};

export default AddBankingDetailsSection;