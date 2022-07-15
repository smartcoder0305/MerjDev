import React from 'react';

import CONTACT_ITEMS from './contactItems';
import styles from './styles.scss';

import ContactItem from './ContactItem';

const TeamSection = () => {
  return (
    <section className={`${styles.contactUtilitiesWrapper} animate`}>
      {CONTACT_ITEMS.map((item) => {
        return <ContactItem key={item.title} {...item} />;
      })}
    </section>
  );
};

TeamSection.propTypes = {};
TeamSection.defaultProps = {};

export default TeamSection;
