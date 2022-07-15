import React from 'react';
import styles from './styles.scss';
import Router from 'next/router';
import Button from '../../../components/Button/index';
import Spinner from '../../../components/Spinner/index';
import * as APIHelper from '../../../utils/APIHelper';

export default class EmailVerificationSection extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            loading: true
        }
    }

    componentDidMount() {
        const token = window.location.search.split('=')[1];
        APIHelper.GetConfig().then((app) => {
            fetch(app.AuthService + '/Auth/validateEmail?token=' + token).then((res) => {
                return res.json();
            }).then((response) => {
                if (response.Success) {
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
            }).catch((err) => {
                this.setState({ error: true, loading: false });
            });
        });

    }

    goToLogin = () => {
        window.location.assign('/login');
    }

    goToHome = () => {
        window.location.assign('/');
    }

    renderError() {
        return (
            <div className={`${styles.verifyEmailErrorContainer}`}>
                <div className='success-icon-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="67.77" height="50.423" viewBox="0 0 67.77 50.423">
                        <g id="Group_74" data-name="Group 74" transform="translate(8925.689 -12779)">
                            <path id="Path_247" data-name="Path 247" d="M-881.162,1091.334v22.15a4.1,4.1,0,0,1-.4,1.76l-17.793-17.794,9.61-8.523-2.037-2.3-16.589,14.713L-932.5,1079.47a4.121,4.121,0,0,1,1.03-.135h38.814v-3.07h-38.814a7.149,7.149,0,0,0-3.535.935l-.018-.017-.056.062a7.2,7.2,0,0,0-3.59,6.219v30.021a7.208,7.208,0,0,0,7.2,7.2h46.182a7.208,7.208,0,0,0,7.2-7.2v-22.15Zm-53.8,24.348a4.1,4.1,0,0,1-.639-2.2v-30.021a4.1,4.1,0,0,1,.593-2.122l18.037,16.349Zm3.49,1.932a4.122,4.122,0,0,1-.963-.118l17.74-17.74,6.3,5.712,6.738-5.976,17.844,17.844a4.1,4.1,0,0,1-1.479.279Z" transform="translate(-7987.016 11708.738)" />
                            <path id="Path_315" data-name="Path 315" d="M-1144.894,728.267a11.54,11.54,0,0,0-11.54,11.54,11.54,11.54,0,0,0,11.54,11.54,11.54,11.54,0,0,0,11.54-11.54A11.54,11.54,0,0,0-1144.894,728.267Zm5.33,15.283-1.586,1.587-3.744-3.743-3.744,3.743-1.586-1.587,3.743-3.743-3.743-3.743,1.586-1.587,3.744,3.744,3.744-3.744,1.586,1.587-3.744,3.743Z" transform="translate(-7724.566 12050.733)" fill="#e60000" />
                        </g>
                    </svg>
                </div>
                <div>
                    Something went wrong with validating your email address. <br />
                    <br />
                    Please contact support on {config.contact.telephone} or email <a href={`mailto:${config.contact.email.support}`} > {config.contact.email.support} </a>
                </div>
                <br />
                <div className={`${styles.btnContainer}`}>
                    <Button handleClick={this.goToHome}> Home </Button>
                </div>
            </div>
        )
    }

    renderVerification() {
        return (
            <div className={`${styles.verifyEmailContainer}`}>
                <div className='success-icon-container'>
                    <svg className='icon-container' xmlns="http://www.w3.org/2000/svg" width="91.426" height="68.424" viewBox="0 0 91.426 68.424">
                        <g id="Email" transform="translate(938.673 -1059.648)">
                            <path id="Path_247" data-name="Path 247" d="M-861.2,1096.564V1126.4a5.519,5.519,0,0,1-.538,2.37L-885.71,1104.8l12.944-11.481-2.744-3.094-22.346,19.819-32.507-29.465a5.548,5.548,0,0,1,1.387-.182h52.284v-4.135h-52.284a9.629,9.629,0,0,0-4.762,1.259l-.024-.023-.076.084a9.7,9.7,0,0,0-4.835,8.377V1126.4a9.709,9.709,0,0,0,9.7,9.7h62.208a9.709,9.709,0,0,0,9.7-9.7v-29.837Zm-72.472,32.8a5.524,5.524,0,0,1-.861-2.96v-40.438a5.521,5.521,0,0,1,.8-2.858l24.3,22.022Zm4.7,2.6a5.55,5.55,0,0,1-1.3-.159l23.9-23.9,8.489,7.694,9.076-8.05,24.036,24.036a5.529,5.529,0,0,1-1.993.375Z" transform="translate(0 -8.027)" />
                            <path id="Path_248" data-name="Path 248" d="M-806.419,1059.648a15.548,15.548,0,0,0-15.548,15.548,15.548,15.548,0,0,0,15.548,15.548,15.548,15.548,0,0,0,15.548-15.548A15.548,15.548,0,0,0-806.419,1059.648Zm-1.459,21.708-7.126-7.123,2.305-2.3,4.82,4.849,7.742-7.74,2.3,2.305Z" transform="translate(-56.375)" fill="#3ed561" />
                        </g>
                    </svg>
                </div>
                <div className={styles.h3MarginTop}>Validated</div>
                <div className={styles.validationsubtitle}>Thank you for validating your email address. 
                <br/> Please log in and complete your registration process.</div>

                 <br/>
                
                <div className={`${styles.btnContainer}`}>
                    <Button handleClick={this.goToLogin}> Login </Button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section>
                {
                    this.state.loading ? <div className={`${styles.loader}`}> <Spinner /> </div> :
                        this.state.error ? this.renderError() :
                            this.renderVerification()
                }
            </section>
        );
    }
};

EmailVerificationSection.propTypes = {};
EmailVerificationSection.defaultProps = {};
