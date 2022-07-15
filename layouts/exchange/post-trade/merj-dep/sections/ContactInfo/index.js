import React from 'react';
import Link from 'next/link';
import app from '../../../../../../config/app'

const ContactInfo = () => {
  return (
    <section>
      <p>
      For more information, please contact {' '}
        <a href={`mailto:${app.contact.email.support}`}> {app.contact.email.support} </a>
      </p>
    </section>
  );
};

ContactInfo.propTypes = {};
ContactInfo.defaultProps = {};

export default ContactInfo;
