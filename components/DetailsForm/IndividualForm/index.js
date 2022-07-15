import React from 'react';
import Router from 'next/router'
import PropTypes from 'prop-types';
import 'isomorphic-unfetch'; 
import FIELDS from './fields';
import Spinner from '../../Spinner'
import Form from '../../Form';
import {DeleteCookie} from '../../../utils/CookieHelper';

import * as APIHelper from '../../../utils/APIHelper';

export default class IndividualForm extends React.Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);

        this.state = {
            isLoading: false,
            isSubmitted: false,
            formData:{},
            app: {}
        };
    }
    static propTypes = {
        formType: PropTypes.string,
        emailAddress: PropTypes.string
    };
    static defaultProps = {};


    componentDidMount() {
      APIHelper.GetConfig().then((app) => {
        this.setState({app});
      });
      
    }

    logout = () => {
      DeleteCookie(this.context, 'Authorization', () => {
        window.location.assign('/login');
      });
    }

    findBranchId = (TenantId) => {
      const { app } = this.state;
      const { BranchIdByTenant } = app;

      var branchId = BranchIdByTenant ? BranchIdByTenant[0].BranchId : "";
      if(BranchIdByTenant.length > 0) {

        BranchIdByTenant.forEach((branchObj) => {
          if(branchObj.TenantId == TenantId) {
            branchId = branchObj.BranchId;
          }
        })
      }

      return branchId;
    }

    onSubmit(form){
        const { formType } = this.props
        const {app} = this.state;
        this.setIsLoading(true);
        form['ApplicantType'] = formType;
        
        if(form['IDType'] === "Passport") {
          delete form['IDNumber'];
        } else {
          delete form["PassportNumber"];
        }


        APIHelper.ValidateAuthToken().then((res) => {
          if(res.Data) {
            form['AuthId'] = res.Data.AuthId;
            form['TenantId'] = res.Data.TenantId;
            form['BranchId'] = this.findBranchId(res.Data.TenantId);

            APIHelper.SaveClientDetails(form).then((response)=>{
              if(response){
                this.setIsLoading(false);
                this.setIsSubmitted(true);
                window.location.assign('/legal');
              }  
            })
          }
        })

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
    

    render(){
        const { formType, isReadOnly, getForm, emailAddress} = this.props;
        const { formData, isLoading } = this.state;
        const componentForm = (<Form fields={FIELDS(formType)} formType={formType} handleSubmit={this.onSubmit} isReadOnly={isReadOnly} getForm={getForm} emailAddress={emailAddress} isLoading={isLoading}/>);
        return(
            <div>
              {
                isLoading? <Spinner />:
                componentForm
              }
            </div>
        );
    }
}
