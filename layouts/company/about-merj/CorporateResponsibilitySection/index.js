import React from 'react';

import styles from './styles.scss';
import helpers from '../../../../static/styles/helpers.scss';

import Thing from '../../../../components/Thing';

const CorporateResponsibilitySection = () => {
  return (
    <section className={styles.corporateResponsibiltyWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
        <div className={styles.intro}>
          <h1>Corporate Social Responsibility</h1>
          <p>
            The board and management of MERJ Exchange view corporate social responsibility as a key
            business objective. Responsible business is embedded within the company's strategy and
            is supported across the business.
          </p>
          <Thing />
        </div>

        <div className={styles.CorporateResponsibilityInfo}>
          <div className={styles.left}>
            <p>
              Clear governance structures and visible leadership play a vital role in embedding
              corporate responsibility throughout the company.
            </p>
            <p>
              In order to practically facilitate our corporate social responsibility, MERJ supports
              programs intended to build educational capacity in the financial services industry.
            </p>
            <p>
              MERJ will ensure a continued and structured commitment to improving knowledge and
              opportunities in the local community.
            </p>
          </div>
          <div className={styles.right}>
            <img
              src="/static/images/pages/about/about-merj/social-responsibility.jpg"
              alt="Corporate Social Responsibility"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CorporateResponsibilitySection.propTypes = {};
CorporateResponsibilitySection.defaultProps = {};

export default CorporateResponsibilitySection;
