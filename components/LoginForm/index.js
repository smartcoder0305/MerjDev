import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';
import Recaptcha from 'react-google-recaptcha'; 
import Link from 'next/link';
import { recaptcha } from '../../config';
import FIELDS from './fields';
import Form from '../Form';
import Spinner from '../Spinner';
import styles from '../ContactForm/styles.scss';

export default class LoginFrom extends React.Component{
    constructor(props){
        super(props);

        this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setRecaptchaValue = this.setRecaptchaValue.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);

        this.recaptchaRef = React.createRef();

        this.state = {
            formData:{ 
              Email: "",
              Password : ""
            },
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
        //Code Here

        //TODO - CALL API TO CHECK STATUS

        //TODO REDIRECT TO CORRECT PAGE

    }

    handleFormData(form){
        const { formData} = this.state;
        let newFormData = {...formData }
        newFormData.Email = form.emailAddress;
        newFormData.Password = form.passWord;
        this.setState({formData: newFormData});
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

      setIsDisabled(isDisabled){
        const { formData} = this.state;
        if(formData.Email !="" && formData.Password !=""){
          this.state({ isDisabled: !isDisabled});
        }
      }
      render(){
          const { recaptchaValue, isLoading, isSubmitted } = this.state;
          const {formType} = this.props;

          const formComponent = isSubmitted ? (
            <div> Redirect details</div>
          ):(
            <Form fields={FIELDS()} isDisabled={!recaptchaValue} handleSubmit={this.onSubmit} >
                <Link href = "/forgot-password">
                  <a>Forget password</a>
                </Link>
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