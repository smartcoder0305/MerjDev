import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import helpers from '../../static/styles/helpers.scss';

import PageTabs  from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';
import { Wizard } from '../../components/Wizard';

import DetailsSection from '../../layouts/details/detailsSection';
import DocumentsUploadSection from '../../layouts/documents-upload/documentsUploadSection';
import LegalSection from '../../layouts/TermsAndConditions/legalSection';



import styles from '../../layouts/enquiries/styles.scss'
import * as APIHelper from '../../utils/APIHelper';
import Router from 'next/router';
import { ValidateStatus } from '../../utils/RedirectHelper';
export default class Details extends React.Component{
    constructor() {
        super(); 
        this.state = {
            applicationComplete: false,
            formData:{},
            emailAddress: "",
            formReady: false,
            dataReady: false,
            isUSACitizen: false,
            jumbotronHeight: 0
        }
        this.jumbotronRef = React.createRef();
    }

    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
        
        APIHelper.GetClientStatus().then((response) => {
            
            if(response && response.Data) {
                var status = response.Data.State;
                if(status && status === 'ApplicationCompletedState'|| status && status === "FicaDocumentsAcceptedState" || status && status ===  "FundsReceivedAndAllocatedState" || status && status === "SharesReceivedState") {
                    APIHelper.GetClientDetails().then(res=>{
                        if(res){
                            var data = res.Data;
                            if(data !== null){           
                                this.setState({formData: data, applicationComplete: true})
                            } else {
                                this.setState({applicationComplete: false});
                            }
                        }
                    })
                } else {
                    ValidateStatus('details', status)
                }
            }
            this.setState({dataReady: true});
          })
          APIHelper.GetUserDataDetails().then((response) => {
              if(response) {
                  if(response.Data.Email == "") {
                      if(!response.Data.RepresentativeEmail) {
                          APIHelper.ValidateAuthToken().then((res) => {
                              if(res.Data.Email == "") {
                                  this.setState({emailAddress: res.Data.Username, formReady: true})
                                  
                                } else {
                                    this.setState({emailAddress: res.Data.Email, formReady: true})
                                }
                            })
                            
                        } else {
                            if(response.Data.RepresentativeEmail != "") {
                                this.setState({emailAddress: response.Data.RepresentativeEmail, formReady: true})
                            }
                        }
                  } else {
                      let email = response.Data.Email != "" ? response.Data.Email : response.Data.RepresentativeEmail
                      this.setState({emailAddress: email, formReady: true})
                    }
                }
        })

      }


    returnClientHeight = (height) => {
        this.setState({jumbotronHeight: height});
    }  

    render(){
        if(!this.state.dataReady)
            return null;
        
        let sections = [
            {
                title:'Details', 
                id:'details',
                content: <DetailsSection isReadOnly={this.state.applicationComplete} getForm={this.state.formData} emailAddress={this.state.emailAddress}/>,
                documents: [],
                url: '/details'
            },
            {
                title:'Terms & Conditions', 
                id:'legal',
                content : <LegalSection isReadOnly={this.state.applicationComplete} getForm={this.state.formData} emailAddress={this.state.emailAddress}/>,
                documents: [],
                url: '/legal' 
            },
            {
                title:'Documents', 
                id:'documents',
                content: <DocumentsUploadSection isReadOnly={this.state.applicationComplete} getForm={this.state.formData} emailAddress={this.state.emailAddress}/>,
                documents: [],
                url: '/documents-upload' 
            }
        ];


        
        return(

                <main>
                    {
                        this.state.applicationComplete ?   
                        <div>
                            <Jumbotron title="Details"/>
                            {this.state.formReady ?
                                <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections}/>: null
                            }
                        </div>
                        :
                        <div>
                            <Wizard title='' subText="Provide your details below to proceed" activeStep='2'/>
                            <DetailsSection 
                                isReadOnly={this.state.applicationComplete} 
                                getForm={this.state.formData} 
                                emailAddress={this.state.emailAddress}
                            />
                        </div>  
                    }
                </main>
       
        );
    }
}








