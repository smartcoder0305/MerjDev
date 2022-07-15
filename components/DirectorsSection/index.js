import React from 'react';

import DIRECTORS from './directors';
import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';

import DirectorItem from './DirectorItem';

const DirectorsSection = () => {
  return (
    <section className={styles.directorsWrapper}>
      <div className={helpers.paddedInner}>

        <ul className="animate">
          {DIRECTORS.map((director) => {
            return (
              <li key={director.name}>
                <DirectorItem {...director} />

                <div className={styles.spacer} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

DirectorsSection.propTypes = {};
DirectorsSection.defaultProps = {};

export default DirectorsSection;
