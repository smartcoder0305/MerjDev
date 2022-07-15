import React from 'react';
import Router from 'next/router'
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';
import FIELDS from './fields';
import Form from '../../Form';
import * as APIHelper from '../../../utils/APIHelper';
import {DeleteCookie} from '../../../utils/CookieHelper';

export default class EntityForm extends React.Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);

        this.state = {
            isLoading: false,
            isSubmitted: false,
            app: {}
          };
    }

    static propTypes = {
        formType: PropTypes.string,
    };
    static defaultProps = {};


    componentDidMount() {
      APIHelper.GetConfig().then((app) => {
        this.setState({app});
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
        const { formType } = this.props;
        const {app} = this.state;
        this.setIsLoading(true);
        form['ApplicantType'] = formType;
            
        if(form['GuardianIDType'] == "Passport") {
          delete form['GuardianIDNumber'];
        } else {
          delete form["GuardianPassportNumber"];
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
                } else {
                  throw Error(response.Message);
                }  
            })
          }
        })

    }

    logout = () => {
      DeleteCookie(this.context, 'Authorization', () => {
        window.location.assign('/login');
      });
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
        const { isSubmitted } = this.state;
        const { formType, isReadOnly, getForm, emailAddress} = this.props;
        const componentForm = (<Form fields={FIELDS(formType)} formType={formType}  handleSubmit={this.onSubmit} isReadOnly={isReadOnly} getForm={getForm} emailAddress={emailAddress} isLoading={isLoading}/>);

        return(
            <div>
                {componentForm}
            </div>
        );
    }
}