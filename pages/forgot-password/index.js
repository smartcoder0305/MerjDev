import React, { Component } from 'react';
import helpers from '../../static/styles/helpers.scss';
// FIXME: Should come from helpers
import styles from '../secret-designs/styles.scss';
import Header from '../../components/Header';
import ReactDOM from 'react-dom';
import Footer from '../../components/Footer';
import {RequestResetPasswordPage, ResetPasswordPage} from 'velocity-trade-auth';
import UIEnhancer from '../../components/UIEnhancer';
import {SingleSignOn, Workflow} from 'vt.singlesignon';

import * as APIHelper from '../../utils/APIHelper';
import Spinner from '../../components/Spinner';

export class ForgetpasswordSSO extends Component {
  constructor() {
    super();
    this.state = {
      origin: "https://dev.merj.exchange",
      tokenExists: false,
      token: "",
      ready: false,
      app: {}
    }


  }

  renderBannerComponent = () => {
    return (
      <UIEnhancer title = {"PASSWORD RESET INFORMATION"} 
              subtext={"If you forgot the password for your own account, use your personal email. If you forgot the password for your entity account, use your work email."}/>
    )
  }

  componentDidMount() {


    
    if(window.location.search) {
      this.setState({
        token: window.location.search.split('=')[1],
        tokenExists: true
      }) 
    }

    APIHelper.GetConfig().then((app) => {
      this.setState({origin: window.location.origin, ready: true, app});
    });

  }
  hideSSOButtons = () => {
    setInterval(() => {
      var buttons = document.getElementsByClassName("fr-container");
      var forgotUpdate = document.getElementsByClassName("fru-container");
      if(forgotUpdate.length > 0) {

        for(var x = 0; x < forgotUpdate.length;x++) {
            var buttonContainer = forgotUpdate[x];
            var buttonElementContainer = buttonContainer.children[0];
            var buttonElements = buttonElementContainer.children;
        
            //buttonContainer.style.display = "none";
            for(var y = 0; x < buttonElements.length; y++) {
              
              if(buttonElements[y].innerHTML == "Done") {
                buttonElements[y].innerHTML = "Login";
              }
            }


        }

      }


      if(buttons.length > 0) {

        for(var x = 0; x < buttons.length;x++) {
            var buttonElement = buttons[x];

              buttonElement.style.display = "none";
        }

      }
    }, 100);
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

  renderSSOComponent = () => {
    const {app, token, origin} = this.state;
    this.hideSSOButtons();
    // this.injectBanner();

    return this.state.tokenExists ? 
    < SingleSignOn
    rootTenantId={app.TenantId}
    endpoint={app.SSOService}
    activationKey={token}
    activationURL={origin + "/login"}
    LoginSuccess={() => window.location.assign(origin + "/login")}
    LoginFailure={() => window.location.assign(origin + "/login")}
    workflow={Workflow.Workflow_RecoverUpdate}
    /> : <SingleSignOn
    rootTenantId={app.TenantId}
    endpoint={app.SSOService}
    workflow={Workflow.Workflow_Recover}
    activationURL={origin + "/forgot-password"}
    LoginFailure={() => window.location.reload()}
    />
  }



  render() {
    const {app, ready, token} = this.state;
    return (
        <main>
          <div className={helpers.paddedInner}>

            <div className={styles.contactWrapper}>
          <div id="container" className={styles.loginContainer}>
                  {
                    ready ?
                    this.renderSSOComponent() : <div style={{display: 'flex', justifyContent: 'center', margin: '50px 0px'}}><Spinner /></div>
                  }

            </div>
          </div>
          </div>

        </main>
    );
  }
}

export default ForgetpasswordSSO;