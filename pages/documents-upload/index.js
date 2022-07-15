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


import * as APIHelper from '../../utils/APIHelper';
import { ValidateStatus } from '../../utils/RedirectHelper';

export default class Documents extends React.Component {
    constructor() {
        super();
        this.state = {
            pendingVerification: false,
            applicationCompleted: false,
            status: '',
            dataReady: false,
            isUSACitizen: false,
            formData: {}
        }
    }



    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
        APIHelper.GetClientStatus().then(response => {
            if (response) {
                var status = response.Data.State;
                switch (status) {
                    case 'AwaitingKycState':
                    case 'AwaitingFundAmericaConfirmation':
                        this.setState({ applicationCompleted: false, pendingVerification: true, status });
                        break;
                    case 'ApplicationCompletedState':
                    case "FicaDocumentsAcceptedState":
                    case "FundsReceivedAndAllocatedState":
                    case "SharesReceivedState":
                        this.setState({ applicationCompleted: true, pendingVerification: false, status });
                        break;
                    default:
                        this.setState({ applicationCompleted: false, pendingVerification: false, status });
                        break;
                }
                APIHelper.GetClientDetails().then(res => {
                    if (res) {
                        var data = res.Data;
                        if (data !== null) {
                            this.setState({ formData:data, isUSACitizen: data.IsUsaBased })
                        }
                    }
                })
              
                this.setState({ dataReady: true });
            }
        })
    }


    render() {
        let sections = [
            {
                title:'Details', 
                id:'details',
                content: <DetailsSection isReadOnly={this.state.applicationCompleted} getForm={this.state.formData} emailAddress={this.state.emailAddress}/>,
                documents: [],
                url: '/details',
            },
            {
                title:'Terms & Conditions', 
                id:'legal',
                content : <LegalSection isReadOnly={this.state.applicationCompleted} getForm={this.state.formData} emailAddress={this.state.emailAddress}/>,
                documents: [],
                url: '/legal' 
            },
            {
                title:'Documents', 
                id:'documents',
                content: <DocumentsUploadSection isReadOnly={this.state.applicationCompleted} />,
                documents: [],
                url: '/documents-upload',
            }
        ];

        if (!this.state.dataReady)
            return null;
        return (

                <main>
                    {
                        this.state.applicationCompleted ?
                        <div>
                            <Jumbotron title="Documents"/>
                            <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections}/>
                        </div> :
                        <div>
                            {
                            this.state.pendingVerification ?
                                <Wizard title='' subText="Your KYC/AML documents are awaiting verification" activeStep='5' /> :
                                <Wizard title='' subText="Please upload your documents below" activeStep='4' />
                            }
                            <div className={helpers.paddedInner}>
                                <DocumentsUploadSection isReadOnly={this.state.applicationCompleted}/>
                            </div>
                        </div>
                    }
                </main>

        );
    }
}