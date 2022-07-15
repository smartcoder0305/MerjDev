import React from 'react';
import Link from 'next/link';

const SponsorAdvisorRequirements = () => {
  return (
    <section>
      <h2>Sponsor Advisor Requirements</h2>
      <p>
        MERJ approved Sponsor Advisors may advise issuers of different asset classes (digital
        assets, funds, equities, debt) based on their qualifications.
      </p>

      <p>
        In order to qualify as a Sponsor Advisor, an applicant must meet one of the following
        minimum requirements:
      </p>

      <ul>
        <li>Licensed Seychelles securities dealer</li>
        <li>Seychelles practicing attorney</li>
        <li>Seychelles practicing accountant</li>
        <li>Fund administrators in Seychelles or a “recognized jurisdiction” (for funds only)</li>
        <li>
          Licensed securities broker/dealer or financial institution in a “recognized jurisdiction”
          - Austria, Australia, Belgium, Bahamas, Bahrain, Bermuda, British Virgin Islands, Canada,
          Cayman Islands, Cyprus, Denmark, France, Germany, Gibraltar, Guernsey, Hong Kong, Isle of
          Man, Ireland, Japan, Jersey, Luxembourg, Malaysia (including Labuan), Mauritius,
          Netherlands, New Zealand, Singapore, South Africa, Switzerland, United Arab Emirates,
          United Kingdom, United States of America
        </li>
        <li>Practicing attorney in a recognized jurisdiction</li>
        <li>Practicing accountant in a recognized jurisdiction</li>
        <li>Licensed fund administrator in a recognized jurisdiction (for funds only)</li>
      </ul>

      <p>
        Note: In most circumstances, MERJ will restrict any Sponsor Advisor not domiciled in
        Seychelles to advising issuers domiciled in the same jurisdiction where the Sponsor Advisor
        operates.
      </p>

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

SponsorAdvisorRequirements.propTypes = {};
SponsorAdvisorRequirements.defaultProps = {};

export default SponsorAdvisorRequirements;
