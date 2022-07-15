import React from 'react';
import App, { Container } from 'next/app';
import { ValidateStatus } from '../utils/RedirectHelper';
// Global styles
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles.scss';
import helpers from '../static/styles/helpers.scss';
import * as APIHelper from '../utils/APIHelper';
import Head from '../components/Head';
import CookieNotification from '../components/CookieNotification';
import PageLoader from '../components/PageLoader';
import SectionAnimator from '../components/SectionAnimator';
import Spinner from '../components/Spinner';
import {DeleteCookie, GetAuthToken} from '../utils/CookieHelper';
import * as detectBrowser from 'detect-browser';

export class MerjApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      browserCompatible: false,
      pageLoaded: false,


      isValidatedPage: false,
      isUSACitizen: false,
      applicationComplete: false,
      previousPageRoute: "",

      loading: false,
      isLoggedIn: false

    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    return { pageProps };
  }


  getValidatedPageData = (isLoggedIn) => {
    if(isLoggedIn) {
      APIHelper.ValidateAuthToken().then((res) => {
        if(res.Data) {
          // this.setState({loading: true});
          APIHelper.GetClientStatus().then((response) => {
            if(response) {
              var status = response.Data.State;
              if(status && status === 'ApplicationCompletedState'|| status && status === "FicaDocumentsAcceptedState" || status && status ===  "FundsReceivedAndAllocatedState" || status && status === "SharesReceivedState") {
                this.setState({applicationComplete: true, previousPageRoute: window.location.pathname, isLoggedIn: isLoggedIn, loading: false });
              }else{
                this.setState({applicationComplete: false, previousPageRoute: window.location.pathname, isLoggedIn: isLoggedIn, loading: false});
                //this is causing problems
                
                //ValidateStatus(window.location.pathname.replace("/", ""), status)
              }
            }
          }).catch(() => {
            console.log('fail')
            this.setState({applicationComplete: false, previousPageRoute: window.location.pathname, isLoggedIn: false, loading: false});
            this.logout();
          })
          
        } else {
          this.setState({applicationComplete: false, previousPageRoute: window.location.pathname, isLoggedIn: false, loading: false});
          this.logout();
        }
        
      }).catch(() => {
        this.setState({applicationComplete: false, previousPageRoute: window.location.pathname, isLoggedIn: false, loading: false});
        this.logout();
      });
    }
    
  }

  logout = () => {
    console.log('logout happened because token isnt valid');
    DeleteCookie(this.context, 'Authorization', () => {
      window.location.assign("/login");
    });
  }




  componentDidMount() {
    const browser = detectBrowser.detect();
    if ((browser && browser.name == 'ie')) {
      this.setState({browserCompatible: false, pageLoaded: true})
    } else {
      let isLoggedIn = GetAuthToken() !== "" && GetAuthToken() !== undefined && GetAuthToken() !== null;
      APIHelper.GetConfig().then((config) => {
        this.setState({browserCompatible: true, pageLoaded: true, app: config, isLoggedIn })
      });
    }
  }

  checkStateChange = (prevState) => {
    var old =JSON.stringify(prevState);
    var current = JSON.stringify(this.state);
    return old != current;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState && window.location.pathname !== prevState.previousPageRoute && this.checkStateChange(prevState)) {
      this.getValidatedPageData(this.state.isLoggedIn);
    }
  }


  renderStaticLoader = () => {
    return (
      <Container>
      <div className={`${styles.loaderContainer} fadeIn`}>
          <Spinner />
      </div>
      </Container>
    )
  }

  render() {
    const { Component, pageProps } = this.props;
    const {browserCompatible, pageLoaded, isLoggedIn, app} = this.state;
    if(this.state.loading) {
      return this.renderStaticLoader();
    } else {
    if(browserCompatible) {
      return (
        <Container>
          <Head />

          <Header app={app} isLoggedIn={isLoggedIn} applicationComplete={this.state.applicationComplete}/>

            <Component {...pageProps} />
    
          <Footer/>

          <CookieNotification />
  
          <PageLoader />
    
          <SectionAnimator />
      
        </Container>
      )
    } else {
      if(pageLoaded) {
      return (
        <Container>

          <div className={styles.unsupportedBrowser}>
              <div className={helpers.errorPage}>
                
                
                <div className={styles.unsupportedBrowserContainer}>
                  <div className={styles.unsupportedBrowserIcon}>
                    <div/>
                  </div>
                  <div className={styles.unsupportedBrowserTitle}>Browser Not Supported</div>
                  <div>We're sorry this browser isn't supported.</div>
                  <div>Please try again using Google Chrome or Edge Browser.</div>
                  <div>Please ensure that your browser is up to date.</div>
                  <br/>
                  <div>Should you experience issues please contact us on <br/> <span><a href='mailto:support@merj.exchange'>support@merj.exchange</a></span></div>
                </div>

              </div>
          </div>
        </Container>
      )} else {
        return null;
      }

    }
  }
   
  }
}

export default MerjApp;
