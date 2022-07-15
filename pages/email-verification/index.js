import React, { Component } from 'react';

import helpers from '../../static/styles/helpers.scss';
// FIXME: Should come from helpers



import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Wizard } from '../../components/Wizard';
import Router from 'next/router';

import * as APIHelper from '../../utils/APIHelper';
import Spinner from '../../components/Spinner';
import {SingleSignOn, Workflow} from 'vt.singlesignon';

export default class EmailVerificationSSO extends Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      ready: false,
      app: {}
    }
  }
  componentDidMount() {
    APIHelper.GetConfig().then((app) => {
      if(app && !app.IsSignUpEnabled){
        window.location.assign('/');
      }
      this.setState({origin: window.location.origin, ready: true, app});
    });
  }

  handleSuccess = () => {
    window.location.assign("/login");
  }

  hideSSOButtons = () => {
    setInterval(() => {
      var buttons = document.getElementsByClassName("fa-container");
     
      if(buttons.length > 0) {

        for(var x = 0; x < buttons.length;x++) {
            var buttonElement = buttons[x];

              buttonElement.style.display = "none";
        }

      }
    }, 100);
  }

  renderSpinner = () => {
    return (
      <Spinner/>
    )
  }

  render() {
    const activationToken = window.location.search ? window.location.search.split('=')[1] : "";
    const {ready, app} = this.state;
    // this.hideSSOButtons();
    return (

        <main>
        <Wizard title='' subText="Login to continue" activeStep='1'/>
          <div className={helpers.paddedInner}>
            {
              ready ?
            
          <SingleSignOn
                rootTenantId={app.TenantId}
                endpoint={app.SSOService}
                workflow={Workflow.Workflow_SignUpActivate}
                LoginSuccess={this.handleSuccess}
                handleSuccess={this.handleSuccess}
                LoginFailure={this.handleSuccess}
                activationURL={app.SSOService + "/SignUp/Activate"}
                activationKey={activationToken}
                RenderSpinner={this.renderSpinner}
            /> : <Spinner/>
          }
          </div>
        </main>

    );
  }
}

//export default Application;