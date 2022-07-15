import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';
import Recaptcha from 'react-google-recaptcha';

import { recaptcha } from '../../config';
import FIELDS from './fields';
import styles from './styles.scss';

import Form from '../Form';
import Spinner from '../Spinner';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setRecaptchaValue = this.setRecaptchaValue.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.setIsSubmitted = this.setIsSubmitted.bind(this);

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

  onSubmit(form) {
    const { formType } = this.props;

    this.setIsLoading(true);

    fetch('/api/contact', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...form, formType }),
    })
    .then(() => {
      // FIXME: Handle error
        this.setRecaptchaValue(null);
        this.setIsLoading(false);
        this.setIsSubmitted(true);

        // reset the form 
        
      })
      .catch(() => null);
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

  render() {
    const { recaptchaValue, isLoading, isSubmitted } = this.state;
    const { formType } = this.props;

    const formComponent = isSubmitted ? (
      <div className={styles.successContainer}>
        <h3>Email sent successfully.</h3>
      </div>
    ) : (
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
