import React from 'react';
import Link from 'next/link';

const IntroductionSection = () => {
  return (
    <section>
      <h2>
        Overview
      </h2>

      <h5>
        MERJ will launch a global, exchange regulated primary market platform for global issuers of
        securities (including securities tokens), digital assets and hybrid tokens in 2019.
      </h5>

      <p>
        MERJ Primary will be a global deal promotion, issuance and distribution platform for complaint
        global securities token offerings, and is operated by MERJ Exchange under its securities exchange
        license. MERJ Primary will match global issuers seeking to list and sell digital assets,
        securities and hybrid instruments with global investors (including US investors) seeking to
        purchase these instruments.
      </p>

      <p>
        Once an issue is complete, issuers will have the opportunity to list the respective
        instrument for secondary market trading on MERJ Exchange.
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

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
