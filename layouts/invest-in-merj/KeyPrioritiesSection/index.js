import React from 'react';

import KEY_PRIORITIES from './keyPriorities';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import KeyPriorityItem from './KeyPriorityItem';

const KeyPrioritiesSection = () => {
  return (
    <section className={styles.keyPrioritiesWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
        <h4>Key priorities</h4>
        <div className={styles.inner}>
          {KEY_PRIORITIES.map((item) => {
            return (
              <div className={styles.single} key={item.title}>
                <KeyPriorityItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

KeyPrioritiesSection.propTypes = {};
KeyPrioritiesSection.defaultProps = {};

export default KeyPrioritiesSection;
