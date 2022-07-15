import React from 'react';
import Link from 'next/link';
import styles from './styles.scss';

const IntroductionSection = () => {
  return (
    <section>
      <br />
      <br />
      <img
        src="/static/images/pages/exchange/summary/merj-exchange-summary.jpg"
        alt="Market Summary"
        className={`${styles.fullWidth}`}
      />

      <p>
        MERJ Exchange is a live, multi-market, end-to-end securities exchange. MERJ is developing a
        next generation global exchange ecosystem along with partners and participating service
        providers. The exchange will support global issuers of securities, digital assets and hybrid
        instruments through the entire asset life cycle from issuance to trading, clearing,
        settlement and registry.
      </p>

      <p>
        MERJ Exchange operates a fair and transparent marketplace in accordance with local
        securities and financial market laws, and in line principles of operations of financial
        markets as published by global standard-setting bodies like the International Organization of
        Securities Commissions (IOSCO).
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>Equities, Debt and Derivatives Markets</li>
        <li>
          As a fully fledged securities exchange, instruments listed qualify as “listed securities”
          allowing for broader participation from institutions and fitting into more investment
          mandates
        </li>
        <li>Direct international membership for brokers/dealers in a “recognized jurisdiction”</li>
        <li>Direct Market Access trading by clients of members</li>
        <li>
          Direct ATS Participation (i.e. no broker required) for global investors supported on an
          execution-only basis (i.e. MERJ provides no advisory or custody services)
        </li>
        <li>
          Multi-Currency – USD, EUR, GBP, ZAR, AUD and SCR are currently supported as listing and
          settlement currencies
        </li>
        <li>
          Affiliate Member of the World Federation of Exchanges (full membership expected 2019)
        </li>
        <li>Investor and broker trading interfaces and tools</li>
        <li>FIX/API support for market makers and brokers</li>
        <li>Web, mobile (iOS, Android) and desktop trading interfaces</li>
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

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
