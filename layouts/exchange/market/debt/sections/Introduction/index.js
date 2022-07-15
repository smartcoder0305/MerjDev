import React from 'react';

const IntroductionSection = () => {
  return (
    <section>
      <h2>Overview</h2>

      <p>
        The Debt Market caters for listings of commercial and public sector debt securities,
        including both short and long term debt instruments issued by global issuers. The MERJ
        listing framework provides for the listing of debt instruments including the following:
      </p>

      <ul>
        <li>Vanilla Corporate Bonds</li>
        <li>Convertible Bonds</li>
        <li>Exchangeable Bonds</li>
        <li>Bonds with warrants attached</li>
        <li>Commercial paper</li>
        <li>Government Bonds</li>
        <li>
          Specialist Debt Securities (e.g. asset backed securities, securitization vehicles
            - see below for special requirements related to these instruments)
        </li>
      </ul>

      <p>
        MERJ accommodates primary listings, secondary listings and cross listings from global
        issuers of debt securities. MERJ is able to support “traditional” debt securities held in a
        central ledger and, from 2019, “tokenized” debt securities issued as ERC20 compatible
        security tokens subject to eligibility requirements prescribed by MERJ Dep. MERJ is
        accepting applications from global issuers interested in listing securities tokens now. For
        more information, please contact us.
      </p>
    </section>
  );
};

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
