import React from 'react';
import Link from 'next/link';

const IntroductionSection = () => {
  return (
    <section>
      <h2>International Securities Identification Number</h2>
      <p>
        MERJ Exchange is the approved National Numbering Agency and issuer of International
        Securities Identification Numbers (ISIN) in the Seychelles. The ISIN identifies securities
        (shares, options, futures, derivatives and debt) and is a number unique to the security
        itself: it does not identify the platform or exchange that the security is traded on. A
        separate number is usually attached to the ISIN to identify its trading location, 
        known as a Market Identification Code. No matter the trading platform, the ISIN number for
        that security will remain unchanged worldwide.
      </p>

      <p>
        For more information, please contact us on the{' '}
        <Link href="/enquiries/general/enquiries">
          <a>Enquiries</a>
        </Link>{' '}
        page.
      </p>

      <ol>
        <li>Memorandum and Articles of Association;</li>
        <li>Prospectus/Private Placement Memorandum (if applicable);</li>
        <li>
          Information memorandum clearly indicating the characteristic of the security namely:
          <ol>
            <li>Security type</li>
            <li>Voting/Non-Voting</li>
            <li>Ownership/transfer restrictions</li>
            <li>Payment status (Nil/Partially/Fully Paid)</li>
            <li>Bearer or Registered securities</li>
          </ol>
        </li>
      </ol>
      <p>
        For further information regarding ISIN&apos;s and ANNA, please visit the following link:{' '}
        <a href="https://www.anna-web.org/">www.anna-web.org</a>.
      </p>
    </section>
  );
};

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
