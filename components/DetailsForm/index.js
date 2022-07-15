import React from 'react';

import EntityForm from './EntityForm';
import IndividualForm from './IndividualForm';
import Form from '../Form';
import FIELDS from './fields';
import * as APIHelper from '../../utils/APIHelper';

export default class DetailsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isSubmitted: false,
            ApplicationType: null,
            formData: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }


    componentDidMount() {
        APIHelper.GetClientDetails().then(response => {
            if(response.Data) {

                let client = response.Data;
                
                this.setState({
                    formData: client
                })
            }
        }).catch(err => {
            return err
        })
    }

    onSubmit(form) {
        this.setIsLoading(true);
        this.setState({
            ApplicationType: form.ApplicantType
        })
        this.setIsSubmitted(true);
    }

    setIsLoading(isLoading) {
        this.setState({
            isLoading,
        });
    }

    setIsSubmitted(isSubmitted) {
        this.setState({
            isSubmitted,
        });
    }

    renderForm(getForm) {
        let formType = this.state.ApplicationType;
        const { isReadOnly, emailAddress } = this.props;
        
        if(formType === 'Company' || getForm.IsGroup){
            return (<EntityForm formType={formType} isReadOnly={isReadOnly} getForm={getForm} emailAddress={emailAddress}/>);
        }else if(formType === 'Individual' || getForm.IsIndividual){
            return (<IndividualForm formType={formType} isReadOnly={isReadOnly} getForm={getForm} emailAddress={emailAddress}/>);
        }
    }

    render() {
        const { isSubmitted } = this.state;
        const { isReadOnly, getForm } = this.props;
        const formComponent = (
            <div>
                <Form fields={FIELDS()} handleSubmit={this.onSubmit} formType='Details'/>
                <hr />
            </div>
        );

        return (
            <div>
                { !isReadOnly ? (formComponent):(null)}  
                {
                    isSubmitted ? (
                        this.renderForm(getForm)
                    ) : (isReadOnly ? this.renderForm(getForm): null)
                }
            </div>
        );
    }

}