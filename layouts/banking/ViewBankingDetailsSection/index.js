import React from 'react';
import FIELDS from '../AddBankingDetailsSection/bankingForm/fields'
import Form from '../../../components/Form';
import styles from '../styles.scss';


export default class ViewBankingDetailsSection extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const { isReadOnly, getForm } = this.props;
        return(
            <section className={styles.mobileScreen +" "+ styles.st}>
                <Form isReadOnly={isReadOnly} getForm={getForm} fields={FIELDS()} />
            </section>
        );
    }
}