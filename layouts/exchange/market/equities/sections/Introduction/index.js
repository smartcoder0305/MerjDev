import React from 'react';
import Link from 'next/link';

const IntroductionSection = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        The Equities Market is split into three different “boards” where listed equity securities
        are grouped according to their classification pursuant to the Listing Rules:
      </p>
      <ul>
        <li> Main Board</li>
        <li>Small and Medium Enterprises (SME) Board</li>
        <li>Venture Capital (VCAP) Board</li>
      </ul>

      <p>
        The MERJ listing framework provides for the listing of equity interests from a range of
        global issuers including the following:
      </p>
      <ul>
        <li>
          Investment Funds – open-ended collective investment schemes (mutual funds) &amp; closed-ended investment companies
        </li>
        <li>Trading Companies</li>
        <li>Holding Companies</li>
        <li>Exchange Traded Funds</li>
        <li>Special Purpose Vehicles (SPV)</li>
        <li>Protected Cell Companies (i.e. cell shares)</li>
        <li>Special Purpose Acquisition Companies (SPAC)</li>
      </ul>

      <p>
        MERJ accommodates primary listings, secondary listings and cross listings from global
        issuers. Issuers listed on a “recognized exchange” may qualify for a “fast track” cross
        listing of their equity interests or a “tokenized” depository interest of same (i.e. equity
        interests held in custody in the home market and security tokens representing depository
        interests issued by regulated depository MERJ Dep).
      </p>

      <p>
        Equity securities must be represented in dematerialized form. MERJ is able to support
        “traditional” securities held in a central ledger and, from 2019, “tokenized” securities
        issued as ERC20 compatible security tokens subject to eligibility conditions prescribed by
        MERJ Dep. MERJ is accepting applications from global issuers seeking to list securities
        tokens now. For more information, please contact us on the{' '}
        <Link href="/enquiries/general/enquiries">
          <a>Enquiries</a>
        </Link>{' '}
        page.
      </p>
    </section>
  );
};

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
