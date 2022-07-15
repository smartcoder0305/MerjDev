import React from 'react';

import KEY_COMPONENTS from './keyComponents';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';

import KeyComponentItem from './KeyComponentItem';

const KeyComponentsSection = () => {
  return (
    <section className={styles.keyComponentsWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
        <h4>Key components</h4>
        <div className={styles.inner}>
          {KEY_COMPONENTS.map((item) => {
            return (
              <div className={styles.single} key={item.title}>
                <KeyComponentItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

KeyComponentsSection.propTypes = {};
KeyComponentsSection.defaultProps = {};

export default KeyComponentsSection;
