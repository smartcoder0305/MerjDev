import React from 'react';

import helpers from '../../../../../../static/styles/helpers.scss';
import styles from '../styles.scss';

const HowToList = () => {
  return (
    <section>
      <h2>How To List</h2>
      <p>
        MERJ is committed to an efficient and responsive listing process to facilitate listings of
        issuers. Our Listing Committee is available to meet on a daily basis as required. A complete
        application for a listing of equity securities can be reviewed and approved in as little as
        5 business days.
      </p>
      <p>
        An issuer seeking a listing on MERJ Exchange must complete an application, retain the
        services of a Sponsor Advisor and submit the completed listing application along with the
        respective application fee through the Sponsor Advisor to MERJ Exchange.
      </p>
      <h4>Listing Methods</h4>
      <p>
        A company seeking a listing of equity securities on the Equities Market of MERJ Exchange has
        three primary methods from which to choose. The Sponsor Advisor will assist companies in
        identifying the most appropriate method for them.
      </p>
      <h4>Listing by Introduction</h4>
      <p>
        A Listing by Introduction is where an issuer has a sufficient investor base and seeks a
        listing for reasons other than raising financing (e.g. increase liquidity and shareholder
        value, regulatory reasons, etc.).
      </p>
      <ul>
        <li>Time for Listing: 4-6 weeks (if accounts are in order)</li>
        <li> Document Requirement: Pre-listing Statement</li>
      </ul>
      <h4>Listing by Placement</h4>
      <p>
        A Listing by Placement is appropriate for companies seeking to raise additional capital by promoting an offering of
        equity securities that does not cross the threshold of what is considered a public offering
        (i.e. offerings through MERJ Primary, private placement though one or more Members,
        crowdfunding within stated parameters in a particular market, etc.). However, after the
        close of the placement, the shares will be listed and publicly available for trading.{' '}
      </p>
      <ul>
        <li>Time for Listing: 2 -3 months (subject to placing shares with investors)</li>
        <li>Document Requirement: Pre-listing Statement</li>
      </ul>
      <h4>Listing by Initial Public Offering</h4>
      <p>
        Similar to a placement, a Listing by Initial Public Offering (IPO) allows the company to raise capital by making an offer to the
        general public. In such cases, an issuer must generally prepare a Prospectus in accordance
        with applicable law of one or more jurisdictions where investors are targeted. Provided that
        any missing information required pursuant to the Listing Rules is included as an addendum, a
        Prospectus may be used as part of the required Pre-Listing Statement. For a Seychelles
        issuer, the Prospectus must be submitted to the Securities Authority for approval before
        publishing and distribution to prospective investors. This typically adds 30 days to the
        process.
      </p>
      <ul>
        <li>
          Time for Listing: 3-6 months or more depending on the complexity and the size of the offer
          (i.e. how much the company is looking to raise).
        </li>
        <li>
          Document Requirement: Prospectus amended with any missing information required pursuant to
          the Listing Rules
        </li>
      </ul>
      <h4>Summary of Listing Requirements</h4>
      <p>
        <strong>General Requirements</strong>
      </p>
      <ul>
        <li>All submissions must be in English;</li>
        <li>No cash shells (except a SPAC);</li>
        <li>
          The directors of a company must not have the power to allot or issue securities without
          the prior approval of the shareholders by means of general or specific authority approved
          by an ordinary resolution;
        </li>
        <li>Securities must be fungible;</li>
        <li>Securities must be eligible for electronic settlement;</li>
        <li>
          Website must provide details of country of incorporation, registered office, financials
          and pre-listing statement/prospectus;
        </li>
        <li>The lock-in period applies to a primary listing;</li>
        <li>All securities must have an ISIN number;</li>
        <li>
          All issuers must retain the services of a Sponsor Advisor, company secretary and external
          auditor; and
        </li>
        <li>
          Information must be disclosed on MERJ Exchange no later than it is disclosed elsewhere.
        </li>
      </ul>
          <div className={styles.tableContainer}>

      <table className={styles.marketEquitiesTables}>
        <thead>
          <tr>
            <td>Specific requirements</td>
            <td>Main Board</td>
            <td>SME</td>
            <td>VCAP</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Minimum Public Shareholders</td>
            <td>A minimum of 25% by at least 60 people.</td>
            <td>A minimum of 15% by at least 20 people.</td>
            <td>A minimum of 10% by at least 5 people.</td>
          </tr>
          <tr>
            <td>Executive Directors</td>
            <td>Minimum of two directors and one non-executive director.</td>
            <td>Minimum of two directors.</td>
            <td>Minimum of two directors.</td>
          </tr>
          <tr>
            <td>Financial Statements</td>
            <td>Must show three years of audited financial statements.</td>
            <td>Must show one year of audited financial statements.</td>
            <td>No profit history required but must present five-year projections.</td>
          </tr>
        </tbody>
      </table>
      </div>

    </section>
  );
};

HowToList.propTypes = {};
HowToList.defaultProps = {};

export default HowToList;
