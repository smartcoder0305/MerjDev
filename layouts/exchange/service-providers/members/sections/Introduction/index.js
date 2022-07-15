import React from 'react';

const IntroductionSection = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        MERJ Exchange Members are qualified global financial services firms that participate in one
        or more of our markets, and provide the following services:{' '}
      </p>
      <ul>
        <li>Market Making</li>
        <li>Brokerage</li>
        <li>Investment Banking</li>
        <li>Advisory</li>
      </ul>

      <p>
        Members of MERJ Primary are able to facilitate buying and selling of primary market
        issuances of a growing number of global “traditional” securities, as well as global
        securities tokens and digital assets from qualifying issuers throughout the MERJ global
        network. See the MERJ Primary page for more information.
      </p>

      <p>
        Members of MERJ Exchange benefit from having direct access to an efficient, regulated
        secondary market for a growing number of listed global securities and digital assets. For more information on these markets, please see the
        “Markets” section.
      </p>

      <h4>Membership Highlights</h4>
      <ul>
        <li>Preferred pricing</li>
        <li>FIX or API connectivity available</li>
        <li>Ability to provide Direct Market Access trading to clients</li>
        <li>
          Direct participation to licensed and regulated clearing agency (MERJ Clear) and depository
          (MERJ Dep) for reduced costs and counterparty risk
        </li>
        <li>
          All DLT Assets (digital assets, stable coins and securities tokens) are held in safekeeping by
          a licensed and regulated securities depository (MERJ Dep)
        </li>
        <li>
          Real-time gross settlement of transactions (equities, debt, digital assets) reducing
          operational headaches associated with settlement-related activities
        </li>
      </ul>
    </section>
  );
};

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
