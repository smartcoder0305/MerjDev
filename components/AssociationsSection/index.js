import React from 'react';

import styles from './styles.scss';
import ASSOCIATIONS from './associations';

import AssociationItem from './AssociationItem';

const AssociationsSection = () => {
  return (
    <section className={styles.associatedlogosWrapper}>
      <div>MERJ EXCHANGE IS AN AFFILIATE OF</div>

      <div className={styles.associationLogos}>
        {ASSOCIATIONS.map((association) => {
          return <AssociationItem key={association.src} {...association} />;
        })}
      </div>
    </section>
  );
};

AssociationsSection.propTypes = {};
AssociationsSection.defaultProps = {};

export default AssociationsSection;
