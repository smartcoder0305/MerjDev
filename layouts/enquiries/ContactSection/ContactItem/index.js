import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const ContactItem = ({ title, subtitle, link }) => {
  const linkComponent = link && <a href={link.href}>{link.title}</a>;

  return (
    <div className={styles.contactUtilitiesSingle}>
      <h5>{title}</h5>

      <p>{subtitle}</p>

      {linkComponent}
    </div>
  );
};

ContactItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string,
  }),
};
ContactItem.defaultProps = {};

export default ContactItem;
