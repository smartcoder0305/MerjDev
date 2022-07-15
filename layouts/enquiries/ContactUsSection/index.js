import React from 'react';
import { MdPhone as PhoneIcon, MdLocationOn as LocationIcon, MdEmail as EmailIcon } from 'react-icons/md';

import { app } from '../../../config';
import styles from './styles.scss';

import Button from '../../../components/Button';

const ContactUsSection = () => {
  const locationLink = `https://maps.google.com/maps?q=${app.contact.address}`;

  return (
    <section className={`${styles.contactUsWrapper} animate`}>
      <h1>Contact us</h1>

      <ul>
        <li>
          <PhoneIcon />
          <a href={`tel:${app.contact.telephone}`}>{app.contact.telephone}</a>
        </li>
        <li>
          <EmailIcon />
          <a  href={`mailto:${app.contact.email.support}`} > 
            {app.contact.email.support}
          </a>
        </li>
        <li>
          <LocationIcon />
          <a href={locationLink} target="_blank" rel="noopener noreferrer">
            {app.contact.address}
          </a>
        </li>
      </ul>

      <Button secondary text="OPEN IN GOOGLE MAPS" href={locationLink} newTab />
    </section>
  );
};

ContactUsSection.propTypes = {};
ContactUsSection.defaultProps = {};

export default ContactUsSection;
