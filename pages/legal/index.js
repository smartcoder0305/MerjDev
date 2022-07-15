import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import helpers from '../../static/styles/helpers.scss';

import PageTabs from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';

import DetailsSection from '../../layouts/details/detailsSection';
import DocumentsUploadSection from '../../layouts/documents-upload/documentsUploadSection';
import LegalSection from '../../layouts/TermsAndConditions/legalSection';


import { Wizard } from '../../components/Wizard';
//import { Tabs } from '../../components/Tabs';
import * as APIHelper from '../../utils/APIHelper';
import { ValidateStatus } from '../../utils/RedirectHelper';


export default class Legal extends React.Component {
    constructor() {
        super()
        this.state = {
            applicationComplete: false,
            dataReady: false,
            formData: {}
        }
    }

    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
        APIHelper.GetClientStatus().then((response) => {
            if (response) {
                var status = response.Data.State;
                if (status && status === 'ApplicationCompletedState' || status && status === "FicaDocumentsAcceptedState" || status && status === "FundsReceivedAndAllocatedState" || status && status === "SharesReceivedState") {
                    APIHelper.GetClientDetails().then(res => {
                        if (res) {
                            var data = res.Data;
                            if (data !== null) {
                                this.setState({formData: data, applicationComplete: true  })
                            }
                        }
                    })
                } else {
                    ValidateStatus('legal', status)
                }

                this.setState({ dataReady: true });
            }
        })
    }

    render() {

        if (!this.state.dataReady)
            return null;
        let sections = [
            {
                title: 'Details',
                id: 'details',
                content: <DetailsSection isReadOnly={this.state.applicationComplete} getForm={this.state.formData} emailAddress={this.state.emailAddress} />,
                documents: [],
                url: '/details'
            },
            {
                title: 'Terms & Conditions',
                id: 'legal',
                content: <LegalSection isReadOnly={this.state.applicationComplete} getForm={this.state.formData} emailAddress={this.state.emailAddress} />,
                documents: [],
                url: '/legal'
            },
            {
                title: 'Documents',
                id: 'documents',
                content: <DocumentsUploadSection isReadOnly={this.state.applicationComplete} getForm={this.state.formData} emailAddress={this.state.emailAddress} />,
                documents: [],
                url: '/documents-upload'
            }
        ];
        return (
                <main>
                    {
                        this.state.applicationComplete ?
                            <div>
                                <Jumbotron title="Terms & Conditions" />
                                <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections} />
                            </div>
                            :
                            <div>
                                <Wizard title='' subText="Please accept the terms and conditions" activeStep='3' />
                                <div className={helpers.paddedInner}>
                                    <LegalSection isReadOnly={this.state.applicationComplete} />
                                </div>
                            </div>
                    }
                </main>
        );
    }
}