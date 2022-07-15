import React from 'react';

import styles from './styles.scss';
import HubspotForm from 'react-hubspot-form'

class CurzioVipSection extends React.Component{
  constructor() {
    super();

    this.state = {
      showMessage: true,
    }
  }


  submitForm = () => {
    this.setState({showMessage: false});
    window.scrollTo({top: 0});
  }

  addSubmitEvent = () => {
    var hubspotForm = document.getElementById('hubspotForm');
      var iframe = hubspotForm.children[0].children[0].children[0];
      var doc = iframe.contentWindow.document;
      var html = doc.children[0];
      var body = html.children[1];
      var retryLimit = 3;
      
      var waitForElement = (body, count) =>{
        setTimeout(() => {
          if(body.children.length > 1) {
            var form = body.children[1].children[0];
            form.addEventListener('submit', this.submitForm);
          } else {
            if(count <= retryLimit) {
                setTimeout(waitForElement(body, count+1), 500);
            }
          }
        }, 250);
    }
    waitForElement(body, 1);
  }


  render() {

  return (
    <section className={`${styles.formWrapper} animate`}>

  <div id="hubspotForm">

      <HubspotForm
        portalId='5030137'
        formId='60eb051d-bd2d-4011-b105-7edacd0963c3'
        onSubmit={(form) => {console.log('test')}}
        onReady={this.addSubmitEvent}
        loading={<div>Loading...</div>}
        
        />

    </div>

    </section>
  );
}
};

CurzioVipSection.propTypes = {};
CurzioVipSection.defaultProps = {};

export default CurzioVipSection;
