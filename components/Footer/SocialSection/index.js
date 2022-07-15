import React from 'react';

import SOCIAL from './social';
import styles from '../styles.scss';

import SocialItem from './SocialItem';

const SocialSection = () => {
  return (
    <section className={styles.socialSectionWrapper}>
      <div className={styles.sectionHeader}>Social</div>
      <div className={styles.iconsWrapper}>
        {SOCIAL.map((item) => {
          return <SocialItem key={item.src} {...item} />;
        })}
      </div>
    </section>
  );
};

SocialSection.propTypes = {};
SocialSection.defaultProps = {};

export default SocialSection;
