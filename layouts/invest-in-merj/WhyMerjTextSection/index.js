import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';


const WhyMerjTextSection = () => {
  return (
    <section className={styles.keyPrioritiesWrapper}>
      <div className={`${helpers.paddedInner} animate`}>
      <hr/>

        <h3>The MERJ Advantage</h3>
        <ul>
          <li>Vertical Integration – MERJ can provide an end to end solution comprising <b>Exchange, Clearing House</b> and <b>Securities Depositary</b></li>
          <li>Flexible Model – MERJ has the ability to plug into other global infrastructure when it makes better sense </li>
          <li>Long standing relationship with engaged regulators</li>
          <li>Token issuers and investors get all the benefits of a fully regulated market</li>
          <li>Compliant access to the widest possible pool of institutional and retail capital</li>
        </ul>
        <br/>

        <h3>Our Expertise</h3>
        <ul>
          <li>MERJ has been operating core market infrastructure for 8 years</li>
          <li>Deep expertise in securities markets operations from end to end</li>
          <li>International management team with significant experience and global network</li>
          <li>Established regulatory framework in accordance with all IOSCO, OECD and FATF principles</li>

        </ul>
        <br/>

        <h3>Strong Foundations for Growth</h3>
        <ul>
          <li>MERJ has been building the regulated exchange foundations for the last <b>8 years</b></li>
          <li>We have been working with our regulators to introduce digital assets for <b>3 years</b></li>
          <li>We have proven the technology and the regulatory framework with the world’s first tokenized listing on a national exchange – with the MERJ-S token</li>
          <li>Now poised for a strong period of growth</li>
          <li>Raising capital to make key hires to help us service the strong demand we are seeing for our platform</li>
        </ul>
        <br/>

        <h3>Already seeing Great Demand</h3>
        <ul>
          <li>Strong and diverse appetite for our platform </li>
          <li>Traditional businesses and corporate vehicles</li>
          <li>Tokenisation platforms, specialist blockchain initiatives, and listings requiring a secondary market venue</li>
          <li>Tokenised assets are expanding to other markets such as real estate, collectibles, fund vehicles, companies, and innovative new investment products</li>
          <li>MERJ is very well positioned to capitalise on a rapidly expanding market segment</li>
        </ul>
        <br/>
      </div>
    </section>
  );
};

WhyMerjTextSection.propTypes = {};
WhyMerjTextSection.defaultProps = {};

export default WhyMerjTextSection;
