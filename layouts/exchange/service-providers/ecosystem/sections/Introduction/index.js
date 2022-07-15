import React from 'react';
import Link from 'next/link';

const IntroductionSection = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        MERJ is building a global financial market ecosystem with participation and support not only
        from its Members and Sponsor Advisors, but also from global service providers in the
        following fields:
      </p>

      <p>Supporting Issuers:</p>
      <ul>
        <li>Legal Services</li>
        <li>Digital/ICO Marketing Specialists</li>
        <li>Token Code Auditors</li>
        <li>Investment Banks/Corporate Finance</li>
        <li>Commercial Banks</li>
        <li>Accountants/Auditors</li>
        <li>Corporate and Trust Services Providers</li>
        <li>Company Secretaries</li>
      </ul>

      <p>Supporting Investors:</p>
      <ul>
        <li>
          Blockchain Identity (e.g. to be accepted as a “identity passport” by ecosystem
          participants)
        </li>
        <li>Automated AML/CFT Screening</li>
        <li>Payment Service Providers</li>
        <li>Investment Managers/Advisors</li>
        <li>A.I. Portfolio Management/Robo Advisors</li>
        <li>Fund Managers and Administrators</li>
      </ul>

      <p>
        For more information, please contact us on the{' '}
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
