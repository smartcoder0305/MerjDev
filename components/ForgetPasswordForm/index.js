import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';
import FIELDS from './fields';
import Form from '../Form';
import Spinner from '../Spinner';
import styles from '../ContactForm/styles.scss';
import EmailComponent from './EmailComponent';

export default class ForgetPasswordForm extends React.Component{
    constructor(props){
        super(props);

        this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);

        this.recaptchaRef = React.createRef();

        this.state = {
            recaptchaValue: null,
            isLoading: false,
            isSubmitted: false,
            err: false
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
        this.setIsLoading(true);
        let options = {
          method: 'POST',
          headers:{
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({form })
        }

        fetch('url', options)
        .then(()=>{

          this.setIsLoading(false);
          this.setIsSubmitted(true);
        })
        .catch(()=>{
            this.setState({err:true})
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
          const { isLoading, isSubmitted } = this.state;
          const {formType} = this.props;

          const formComponent = isSubmitted ? (
              <EmailComponent />
          ):(
            <div>
              <Form fields={FIELDS(formType)} handleSubmit={this.onSubmit}>
                  <div className={styles.spacer} />
              </Form>
            </div>
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