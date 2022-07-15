import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles.scss';
import HubspotForm from 'react-hubspot-form'
import Form from '../Form';

export default class SubscriptionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    mailChimpFormName: PropTypes.string,
    titleText: PropTypes.string,
    subtitleText: PropTypes.string,
  };

  static defaultProps = {};
  onSubmit(form){
    if(form.current) {

      form.current.submit();
    }
  }
  render() {
    // const { mailChimpFormName, titleText, subtitleText } = this.props;
    const { titleText } = this.props;
    // const { mailChimpForms } = app;
    // const mailChimpURL = mailChimpForms[mailChimpFormName];
    // const subtitleTextComponent = subtitleText && <p>{subtitleText}</p>;

    return (
      <div className={`${styles.FormWrapper} animate`}>
        <h3>{titleText}</h3>
           <HubspotForm
      portalId='5030137'
      formId='d60c3586-bb10-4369-8c8e-077bcb92f97b'
      onSubmit={(form) => {console.log('test')}}
     
      loading={<div>Loading...</div>}
      />
      </div>
    );
  }
}
