import React, { Component } from 'react';

import helpers from '../../static/styles/helpers.scss';
// FIXME: Should come from helpers

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Wizard } from '../../components/Wizard';

// import styles from './styles.scss';
import styles from '../secret-designs/styles.scss';

import {SingleSignOn, Workflow} from 'vt.singlesignon';
// import {Signup} from 'velocity-trade-auth';

import * as APIHelper from '../../utils/APIHelper';
import Spinner from '../../components/Spinner';
import Router from 'next/router';
import UIEnhancer from '../../components/UIEnhancer';
export default class ApplicationSSO extends Component {
  
  constructor() {
    super();
    this.state = {
      origin: "https://dev.merj.exchange",
      renderForm: false,
      app: {},
      tenantId: "",
      tenantName: "",
      logoUrl: ""
    }
  }
  renderBannerComponent = () => {
    return (
      <UIEnhancer title = {"LET'S GET STARTED"} 
      subtext={"To invest in your own capacity, use your personal email address. To invest on behalf of an entity, use your work email address."}/>
    )
  }
  componentDidMount() {
    APIHelper.GetConfig().then((app) => {
      if(app && !app.IsSignUpEnabled){
        window.location.assign('/');
      }
      let searchUrl = window.location.href;
      let tenantName = "";
      if(searchUrl.includes("?tenant=")) {
        tenantName = searchUrl.split('=')[1] ?  searchUrl.split('=')[1] : tenantName;
        if(tenantName) {
          APIHelper.GetTenant(tenantName).then((res) => {
            return res.json();
          }).then((response) => {
            this.setState({
              renderForm: true,
              origin: window.location.origin,
              tenantId: response.Data.Id,
              app,
              tenantName,
              logoUrl: response.Data.LogoUrl
            });
          }).catch(() => {
            this.setState({origin: window.location.origin, renderForm: true, app, tenantId: app.TenantId});
          })
        }
      } else {
        this.setState({origin: window.location.origin, renderForm: true, app, tenantId: app.TenantId, tenantName: tenantName});
      }

    });
  }

  memberLookUp  = () => {
    const { logoUrl, tenantName } = this.state;

    return (
    <div>
      {
        logoUrl !== "" ?       
                <div className={styles.tenantLogo} >
                    <div>
                        <img src={logoUrl} alt={tenantName} className={styles.logoImg}/>
                      </div>
                </div>
                : null
  
    }
    </div>);
  }

  hideSSOButtons = () => {
    setInterval(() => {
      var buttons = document.getElementsByClassName("fsu-container");
      if(buttons.length > 0) {

        for(var x = 0; x < buttons.length;x++) {
            var buttonElement = buttons[x];
            buttonElement.style.display = "none";
        }

      }
    }, 100);
  }

  renderSSOComponent = () => {
    const {app, tenantId, logoUrl} = this.state;

    this.hideSSOButtons();



    return (
      <div className={logoUrl !== "" ? styles.createAccountSingleSingOn: null}>
        <SingleSignOn
          rootTenantId={tenantId}
          endpoint={app.SSOService}
          workflow={Workflow.Workflow_SignUp}
          LoginSuccess={() => document.location.href="/login"}
          LoginFailure={() => document.location.href="/login"}
          activationURL={`${this.state.origin}/email-verification`}
          RenderSpinner={this.renderSpinner}
        />
      </div>
    )
  }

  render() {
    const {app, logoUrl} = this.state;    
    return (

        <main>
          <Wizard title='' subText="Provide your details below to proceed" activeStep='1'/>
          <div className={helpers.paddedInner}>
              <div className={logoUrl !== ""? `${styles.createAccountContainer}`: `${styles.loginContainer}`}> 
              {
                this.state.renderForm ? 
                <>
                {
                  this.memberLookUp()
                }
                {
                  this.renderSSOComponent(app)
                }
                </>
                
                : <div style={{display: 'flex', justifyContent: 'center', margin: '50px 0px'}}><Spinner /></div>
              }
              </div>
          </div>
        </main>
    );
  }
}

//export default Application;