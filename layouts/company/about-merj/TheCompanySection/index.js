import React from 'react';

import COMPANY_ITEMS from './companyItems';
import styles from './styles.scss';
import helpers from '../../../../static/styles/helpers.scss';

const TheCompanySection = () => {
  return (
    <section className={styles.theCompanyWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
        <div className={styles.theCompanyInner}>
          <div className={styles.left}>
            <h1>The Group</h1>

            {COMPANY_ITEMS.map((item) => {
              return (
                <div className={styles.legalInfo} key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              );
            })}

            <p>The exchange went live in August of 2013 with the launch of the Equities Market.</p>
          </div>

          <div className={styles.right}>
            <figure>
              <img
                src="/static/images/pages/about/about-merj/merj-exchange-diagram.jpg"
                alt="About The Company"
              />

              <figcaption>
                MERJ Exchange Limited is the parent company owning 100% of MERJ Clear and MERJ Dep.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

TheCompanySection.propTypes = {};
TheCompanySection.defaultProps = {};

export default TheCompanySection;
