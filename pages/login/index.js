import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from 'next/router';
import helpers from '../../static/styles/helpers.scss';
import styles from '../secret-designs/styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UIEnhancer from '../../components/UIEnhancer';
import {LoginPage} from 'velocity-trade-auth';
import {SingleSignOn, Workflow} from 'vt.singlesignon'

import * as APIHelper from '../../utils/APIHelper';
import Spinner from '../../components/Spinner';
import * as Cookie from '../../utils/CookieHelper';
export class LoginSSO extends Component {
  constructor(){
    super();
    this.state = {
      ready: false,
      app: {},
      returnUrl: "", 
    }   
  }

  componentDidMount(){
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    document.body.scrollTop = 0;
    APIHelper.GetConfig().then((app) => {
      if(app && !app.IsLoginEnabled){
        window.location.assign('/');
      }
      
      let params = window.location.search.substring(1).split('&');
      let paramData = {};
  
      params.forEach((data) => {
          paramData[data.split('=')[0]] = data.split('=')[1];
      })

      let returnUrl = paramData.returnUrl ? paramData.returnUrl : "";
      
      this.setState({ready: true, app, returnUrl });
    });
   

  }

  renderBannerComponent = () => {
    return (
      <div id="banner-container">

        <UIEnhancer title = {"LOGIN INFORMATION"} 
                subtext={"To login in your own capacity, use your personal email address. To login on behalf of an entity, use your work email address."}/>
      </div>
    )
  }

  onLoginSubmit = (token) => {
    if(token) {
          Cookie.SetAuthToken(token);


          APIHelper.GetClientStatus().then((resolve) => {
            if(resolve.Data) {

            let status = resolve.Data.State;      
          switch (status) {
            case "RegistrationCompletedState":
              window.location.assign('/details');
              break;
              case "ClientDetailsCompleted":
              window.location.assign('/legal');
              break;
              case "TandCAccepted":
                window.location.assign('/documents-upload');
                break;
              case "AwaitingKycState":
              case "KycFirstCheckedState":
              case "AwaitingFundAmericaConfirmation":
              case "FicaDocumentsRejectedState":
              case "PartialDocumentUploadedState":
                window.location.assign('/documents-upload');
                break;
              case "FicaDocumentsAcceptedState":
              case "FundsReceivedAndAllocatedState":
              case "ApplicationCompletedState":
            case "SharesReceivedState":
              window.location.assign('/portfolio');
              break;
          }
        } else {
          window.location.assign('/details');
        }

          
        })
      }

  }

  renderSpinner = () => {
    return (
      <Spinner/>
    )
  }

  // injectBanner = () => {
  //   setTimeout(() => {
  //     var container =  document.getElementById("container");
  //     var existingBanner = document.getElementById("banner-container");
  //     if(!existingBanner) {
  //       if(container) {
  //         if(container.children.length > 0) {
  //           var heading = container.children[0].getElementsByClassName("page-heading")[0];
  //           var bannerContainerString = "<div id='sso-banner'></div>";
  //           var hasBanner = false;
  //           if(!hasBanner) {

  //             //This creates a new div, that we're injecting the banner into.
  //             //However, this creates problems with changing screens, as theres no way to remove the node.
  //             //Uncomment this if you're willing to try and solve it.
  //             // heading.outerHTML += bannerContainerString;
              
  //             var banner = document.getElementById("sso-banner");
  //             if(banner) {
  //               ReactDOM.render(this.renderBannerComponent(), banner);
  //               hasBanner = true;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }, 100);
  // };

  // handleSSOButtons = () => {
  //   setTimeout(() => {
  //     var buttons = document.getElementsByClassName("action-button");
  //     if(buttons.length > 0) {

  //       for(var x = 0; x < buttons.length;x++) {
  //           var buttonElement = buttons[x];

  //           if(buttonElement.innerHTML == "Next") {
  //             buttonElement.innerHTML = "Login";
  //           };

  //           if(buttonElement.innerHTML == "Cancel") {
  //             buttonElement.style.display = "none";
  //           };
  //       }

  //     }
  //   }, 100);
  // }

  handleUsernameLabel = () => {
    setTimeout(() => {
      var label = document.getElementById("username-email-label");
      if(label) {
        label.innerHTML = "Email"
      }
    }, 100);
  }

  renderSSOComponent = () => {
    const {app} = this.state;
    // this.injectBanner();
    // this.handleSSOButtons();
    this.handleUsernameLabel();
    return (
      <SingleSignOn
                rootTenantId={app.TenantId}
                endpoint={app.SSOService}
                workflow={Workflow.Workflow_Login}
                multisitesignon={false}
                LoginSuccess={(token) => this.onLoginSubmit(token)}
                LoginFailure={() => {window.location.reload()}}
                recoverPasswordLink={"/forgot-password"}
                RenderSpinner={this.renderSpinner}
            />
    )
  }
  
  render() {
    const {app, ready} = this.state;

    return (

        <main>
          <div className={helpers.paddedInner}>
            <div id="container" className={`${styles.loginContainer}`}>
      
              {
                ready?
                  <>
                  {
                    this.renderSSOComponent(app)
                  }
                  </>
                : <Spinner/>
              }

            </div>


          </div>
        </main>        
    );
  }
}

export default LoginSSO;