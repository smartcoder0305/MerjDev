import React from 'react';
import Link from 'next/link';

const PlannedFor2019 = () => {
  return (
    <section>
      <h2>Planned for 2019</h2>

      <p>MERJ is building a next generation global exchange ecosystem using a phased approach.</p>

      <ul>
        <li>
          New securities exchange licensed and regulated primary market (MERJ PRIMARY) for
          international deal promotion and distribution of digital assets, securities (including
          “securities tokens” also known as “digital securities”) and hybrid instruments (e.g.
          utility tokens with one or more properties of a security)
        </li>
        <li>
          Addition of secondary market listing and trading of securities tokens issued on Ethereum
          (e.g. ERC-20 based tokens including standardized protocols such as DS Protocol, ST-20,
          R-Token and ERC-1400)
        </li>
        <li>
          Non-standard securities instruments such as single asset real estate tokens, revenue
          sharing tokens, tokenized ETFs with underlying digital assets and more will be supported
        </li>
        <li>
          A single portal through which to access different MERJ markets, view reports, trade, etc.
        </li>
        <li>
          Safekeeping/custody of DLT Assets being traded on MERJ EXCHANGE by our licensed and
          regulated securities facility (MERJ DEP)
        </li>
      </ul>
      <p>
        For more information please contact us on the{' '}
        <Link href="/enquiries/general/enquiries">
          <a>Enquiries</a>
        </Link>{' '}
        page.
      </p>
    </section>
  );
};

PlannedFor2019.propTypes = {};
PlannedFor2019.defaultProps = {};

export default PlannedFor2019;
