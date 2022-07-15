import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import helpers from '../../static/styles/helpers.scss';

import PageTabs  from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';

import * as APIHelper from '../../utils/APIHelper';
import ViewBankingDetailsSection from '../../layouts/banking/ViewBankingDetailsSection'
import AddBankingDetailsSection from '../../layouts/banking/AddBankingDetailsSection'

import OnboardingBanner from '../../components/OnboardingBanner';
import {Tabs} from '../../components/Tabs';


export default class Banking extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            bankingFormData: {},
            isReadOnly: false,
            dataReady: false,
            editMode: true
        }
    }

    componentDidMount(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;

        APIHelper.GetClientStatus().then((response)=>{
            if(response){
                var status = response.Data.State;
                if(status && status === 'ApplicationCompletedState'|| status && status === "FicaDocumentsAcceptedState" || status && status ===  "FundsReceivedAndAllocatedState" || status && status === "SharesReceivedState") {
                    APIHelper.GetClientBankAccounts().then((res)=>{
                        if(res && res.Data){
                            if(res.Data.length > 0 ){
                                let data = res.Data[0]
                                this.setState({
                                    isBankingAccountAvailable: true,
                                    bankingFormData : data,
                                    editMode : false
                                    })
                            }
                        }
                    })
                }
            }

            this.setState({dataReady: true});

        })

    }


    render(){

        if(!this.state.dataReady)
            return null;
        
        let sections = [
            {
                title: 'Banking Details',
                id: 'banking',
                content: this.state.isBankingAccountAvailable && !this.state.editMode? 
                <ViewBankingDetailsSection getForm={this.state.bankingFormData} isReadOnly={!this.state.editMode} /> 
                : 
                <AddBankingDetailsSection />,
                documents: [],
                url: '/banking'
            },
            {
                title: 'Make a Deposit',
                id: 'deposit',
                content: < none/>,
                documents: [],
                url: '/add-deposit'
            },
          
            {
                title: 'Withdrawals',
                id: 'withdrawals',
                content: < asds />,
                documents: [],
                url: '/withdrawals'
            },
            {
                title: 'Token Transfers',
                id: 'transfertokens',
                content: < none/>,
                documents: [],
                url: '/transfers'
            },
           
        ]    
            
        return(
                <main>
                    <Jumbotron title="Bank Details"/>

                    <div>
                        <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections}/>
                    </div>
                </main>
        )    
    }

}