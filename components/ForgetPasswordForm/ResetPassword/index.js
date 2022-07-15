import React from 'react';
import FIELDS from './fields';
import Form from '../../Form';
import SuccessComponent from '../SuccessComponent';
import Spinner from '../../Spinner';
import styles from '../../ContactForm/styles.scss';

export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
        this.setIsSubmitted = this.setIsSubmitted.bind(this);
        this.handlePassWordValidation = this.handlePassWordValidation.bind(this);

        this.state = {
            isLoading: false,
            isSubmitted: false,
            err: false
        };
    }

    static propTypes = {
        formType: PropTypes.string,
    };

    static defaultProps = {};

    componentDidMount(){
        const token = window.location.search.split('=')[1];
        let options = {
            method: 'get',
            headers:{
                'Authorization': "Bearer"+ token 
            }
        }

        fetch('url' ,options).then((res)=>{
            return res.json();
        })
        .catch((err)=>{
                this.setState({
                    err: true
                })
        });
    }

    onSubmit(form) {
        if(this.handlePassWordValidation(form.password) && this.handlePassWordValidation(form.confirmPassword)){
            if(form.password === form.confirmPassword){
                //Code Here
                this.setIsLoading(true);
                let options = {
                    method: 'post',
                    headers: {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'password': form.confirmPassword})
                }

                fetch( 'url', options).then(()=>{
                    this.setIsLoading(false);
                    this.setIsSubmitted(true);
                })
                .catch((err)=>{
                    this.setState({err: true})
                });
              }
        }
    }

    handlePassWordValidation(x){
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
        return strongRegex.test(x);
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
        const resetPasswordComponent = isSubmitted ? (
                <SuccessComponent />
        ):(
            <Form fields={FIELDS()}  handleSubmit={this.onSubmit}/>
        );

        const loadingComponent = isLoading && (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          );
      
          return (
            <div className={styles.container}>
              {resetPasswordComponent}
              
              {loadingComponent}
            </div>
          );
    }
}
