import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';
import Recaptcha from 'react-google-recaptcha'; 
import Link from 'next/link';
import { recaptcha } from '../../config';
import FIELDS from './fields';
import Form from '../Form';
import Spinner from '../Spinner';
import styles from './styles.scss';

export default class ApplicationFrom extends React.Component{
    constructor(props){
        super(props);

        this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setRecaptchaValue = this.setRecaptchaValue.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);
        this.handlePassWordValidation = this.handlePassWordValidation.bind(this);
        this.recaptchaRef = React.createRef();

        this.state = {
            recaptchaValue: null,
            isLoading: false,
            isSubmitted: false,
        };
    }
    static propTypes = {
        formType: PropTypes.string,
    };

    static defaultProps = {};

    onRecaptchaChange(recaptchaValue) {
        this.setRecaptchaValue(recaptchaValue);
    }
    onSubmit(form){
        //Still need code
        
        if(this.handlePassWordValidation(form.password) && this.handlePassWordValidation(form.confirmPassword)){
          if(form.password === form.confirmPassword){
            //Code Here
          }
        }else{
          //Code Here
          alert('password dont match');  
        }
    }
    handlePassWordValidation(x){
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
      return strongRegex.test(x);
    }
    setRecaptchaValue(recaptchaValue) {
        this.setState({
          recaptchaValue,
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
          const { recaptchaValue, isLoading, isSubmitted } = this.state;
          const {formType} = this.props;
          const formComponent = isSubmitted ? (
            <div> Redirect inside</div>
          ):(
            <Form fields={FIELDS(formType)} isDisabled={!recaptchaValue} handleSubmit={this.onSubmit}>
                <Recaptcha
                    ref={this.recaptchaRef}
                    sitekey={recaptcha.siteKey}
                    onChange={this.onRecaptchaChange}
                />
                <div className={styles.spacer} />
            </Form>
          );  
          const loadingComponent = isLoading && (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          );
      
          return (
            <div className={styles.container}>
              {formComponent}
              
              {loadingComponent}
            </div>
          );
      }
}