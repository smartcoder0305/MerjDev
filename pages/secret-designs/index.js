import React, { Component } from 'react';
import helpers from '../../static/styles/helpers.scss';
import styles from './styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UIEnhancer from '../../components/UIEnhancer';
import * as APIHelper from '../../utils/APIHelper';

import {Step, SingleSignOn} from 'vt.singlesignon';
export class SSODesignIndex extends Component {
  constructor(){
    super();


    this.state = {
      ready: false,
      app: {},
      returnUrl: "",
      selectedPage: 1
    }  
    
    

  }

  componentDidMount(){
    //This page should not work on prod.
    //lets check for envs, else we redirect off this page on prod.
    //that way:
    // A - I dont have to move all the styling that is being used for all the SSO pages.
    // B - we can still use this page for development.
    var host = window.location.host;

    var debugMode = host.includes("localhost") || host.includes("uat")  || host.includes("dev") || host.includes("test");
    if(!debugMode) {
      window.location.assign("/");
    }

    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    document.body.scrollTop = 0;

    APIHelper.GetConfig().then((app) => {
    
      let params = window.location.search.substring(1).split('&');
      let paramData = {};
  
      params.forEach((data) => {
          paramData[data.split('=')[0]] = data.split('=')[1];
      })

      let returnUrl = paramData.returnUrl ? paramData.returnUrl : "";

      this.setState({ready: true, app, returnUrl});
    });
   

  }
  renderBannerComponent = () => {
    return (
      <UIEnhancer title = {"LOGIN INFORMATION"} 
              subtext={"To login in your own capacity, use your personal email address. To login on behalf of an entity, use your work email address."}/>
    )
  }

  onLoginSubmit = (token) => {
    console.log(token);
  }
  
  handlePageChange = (event) => {
    this.setState({selectedPage: Number(event.currentTarget.value)});
  } 

  render() {
    const {app, ready, selectedPage} = this.state;
    return (
        <main>
          <div className={helpers.paddedInner}>


              <select value={this.state.selectedPage} onChange={this.handlePageChange}>
              {
              Object.keys(Step).map((key) => (
          
                  !isNaN(Number(Step[key])) ? <option key={Step[key]} value={Step[key]}>{key}</option> : null
                  )) 
              }
                </select>
            <div className={`${styles.loginContainer}`}>
             
            <SingleSignOn
                    rootTenantId={""}
                    endpoint={""}
                    recoverPasswordLink={""}
                    designMode = {true}
                    designScreen={this.state.selectedPage}
                />


            </div>


          </div>
        </main>        
    );
  }
}

export default SSODesignIndex;