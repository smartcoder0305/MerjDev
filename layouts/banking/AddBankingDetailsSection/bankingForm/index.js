import React from 'react';
import Form from '../../../../components/Form';
import FIELDS from './fields';
import Button from '../../../../components/Button';
import * as APIHelper from '../../../../utils/APIHelper';
import styles from '../../styles.scss';

export default class BankingForm extends React.Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(form) {
        APIHelper.GetConfig().then((app) => {
            form['AccountCurrency'] = app.BitPayCurrency;
          
            APIHelper.AddClientOffshoreBankAccount(form).then((response)=>{
                if(response.Success){
                    window.location.reload();
                }
            }).catch((err=>{
                console.log(err);
            }))
        });
    }

    goBack = ()=>{
        window.location.reload();
    }
    render(){
        const componentForm = (
                    <Form fields={FIELDS()} handleSubmit={this.onSubmit} getForm={{}}>
                        <Button ghost dark handleClick={this.goBack}>Cancel</Button>
                    </Form>
        );
        return(
            <div >
              {
                componentForm
              }
            </div>
        );
    }
} 