import React from 'react';

const IntroductionSection = () => {
  return (
    <section>
      <h2>Clearing and Settlement</h2>

      <p>
      The MERJ Exchange Market Rules require transactions to be cleared and settled pursuant to the rules of an appointed clearing agency on a strict delivery methods versus payment basis. 
      For “cash market” securities (e.g. equities and debt), MERJ has adopted one of the three IOSCO and G30 recommended delivery methods versus payment frameworks being DVP Model 1 (“Real Time Gross Settlement”).
      </p>

      {/* <p>
        There is no short selling. High frequency trading which many investors find undesirable is
        not prevalent and is in fact discouraged by this model. Importantly this also removes risk
        of delayed or failed settlements.
      </p>

      <p>
        MERJ EXCHANGE has approved MERJ Clearing and Settlement Limited (“MERJ CLEAR”) to provide
        clearing and settlement services for all (except for ZAR denominated) MERJ listed
        securities.
      </p>

      <p>
        MERJ EXCHANGE has also approved the South African Central Securities Depository (STRATE) as
        a securities settlement system for ZAR denominated MERJ listed securities from South African
        domiciled issuers.
      </p>

      <h4>Securities Registry</h4>

      <p>
        Any issuer of a MERJ listed security must appoint an approved securities facility/registry
        to maintain the securities ownership register of the listed securities in uncertificated
        form. MERJ has approved MERJ Depository and Registry Limited (“MERJ DEP”) to provide this
        service for issuers of securities listed on MERJ EXCHANGE.
      </p>

      <p>
        MERJ EXCHANGE has also approved the South African Central Securities Depository (“STRATE”)
        to maintain the securities ownership register of certain MERJ listed securities domiciled in
        South Africa.
      </p> */}
    </section>
  );
};

IntroductionSection.propTypes = {};
IntroductionSection.defaultProps = {};

export default IntroductionSection;
