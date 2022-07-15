import React from 'react';

import helpers from '../../../../../../static/styles/helpers.scss';

const HowToList = () => {
  return (
    <section>
      <h2>How to List</h2>

      <p>
        MERJ is committed to an efficient and responsive listing process to facilitate listings of
        issuers of debt securities. Our Listing Committee is available to meet on a daily basis as
        required. A complete application for a listing of debt securities can be reviewed and
        approved in as little as 5 business days.
      </p>

      <p>
        An issuer seeking a listing of debt securities on MERJ Exchange must retain the services of
        a Sponsor Advisor, complete an application and submit the completed listing application
        along with the respective application fee through the Sponsor Advisor to MERJ Exchange.
      </p>

      <h4>Listing Methods</h4>

      <p>
        A company seeking a listing of debt securities on the Debt Market of MERJ Exchange has three
        primary methods from which to choose. The Sponsor Advisor will assist companies in
        identifying the most appropriate method for them.
      </p>

      <h4>Listing by Introduction</h4>

      <p>
        A Listing by Introduction is where an issuer has a sufficient investor base and seeks a
        listing for reasons other than raising financing (e.g. increase liquidity, regulatory
        reasons, etc.).
      </p>

      <h4>Listing by Placement</h4>

      <p>
        A Listing by Placement is appropriate for companies seeking to raise additional capital by promoting an offering of
        debt securities that does not cross the threshold of what is considered a public offering
        (i.e. offerings through MERJ Primary, private placement though one or more Members,
        crowdfunding within stated parameters in a particular market, etc.). However, after the
        close of the placement, the debt instruments will be listed and publicly available for
        trading.
      </p>

      <h4>Listing by Initial Public Offering</h4>

      <p>
        Similar to a placement a Listing by Initial Public Offering (IPO) allows the company to raise capital by making an offer to the
        general public. In such cases, an issuer must generally prepare a Prospectus in accordance
        with applicable law of one or more jurisdictions where investors are targeted. Provided that
        any missing information required pursuant to the Listing Rules is included as an addendum, a
        Prospectus may be used as part of the required Pre-Listing Statement. For a Seychelles
        issuer, the Prospectus must be submitted to the Securities Authority for approval before
        publishing and distribution to prospective investors. This typically adds 30 days to the
        process.
      </p>

      <h4>Summary of Listing Requirements</h4>

      <p>
        <strong>General Requirements</strong>
      </p>

      <ul>
        <li>
          All issuers must retain the services of a Sponsor Advisor and have a suitably qualified
          company secretary and external auditor appointed;
        </li>

        <li>
          The Pre-listing Statement and all submissions must be in English or accompanied by a
          translation into English;
        </li>

        <li>
          Minimum amount of issue to be listed must not be less than USD 300,000.00 or its equivalent
          value in the applicable currency, except in the case of a tap issue;
        </li>

        <li>Securities must be fungible;</li>

        <li>Securities must be eligible for electronic settlement;</li>

        <li>
          Website must provide details of country of incorporation, registered office address, prior
          year financial statements and annual reports, and the Pre-listing Statement/Prospectus; and
        </li>

        <li>
          All securities must have an ISIN number (Note: MERJ is the National Numbering Agency of
          Seychelles and can arrange ISINs for issuers)
        </li>
      </ul>

      <table className={helpers.defaultTable}>
        <thead>
          <tr>
            <td>Specific Criteria</td>
            <td>Main Board</td>
            <td>Securitization Vehicle*</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Minimum Public Debt Security Holders</td>
            <td>A minimum of 25% held by at least 60 people</td>
            <td>N/A</td>
          </tr>

          <tr>
            <td>Minimum Executive Directors</td>
            <td>Two (Managing Director/CEO and Finance Director/CFO)</td>
            <td>N/A</td>
          </tr>

          <tr>
            <td>Financial Statements</td>
            <td>Minimum of three years audited financial statements for the most recent years</td>
            <td>N/A</td>
          </tr>

          <tr>
            <td>Audit Standard</td>
            <td>International Financial Reporting Standard</td>
            <td>International Financial Reporting Standard</td>
          </tr>
        </tbody>
      </table>

      <h4>Securitization Vehicles</h4>

      <p>
        The MERJ listing framework provides for the listing of “securitization vehicles” which are
        exempted from certain general requirements. A securitization vehicle is defined as “a Trop-X
        issuer whose purpose is to engage in transactions by which it acquires or assumes risks
        relating to claims, other assets, or obligations.”
      </p>

      <p>
        A securitization vehicle is a special purpose vehicle and may not engage in activities of a
        trading company or holding company.
      </p>

      <p>If you are interested in listing debt securities on MERJ Exchange, please contact us</p>
    </section>
  );
};

HowToList.propTypes = {};
HowToList.defaultProps = {};

export default HowToList;
