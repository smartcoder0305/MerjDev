import React from 'react';

const Settlement = () => {
  return (
    <section>
      <h3>Settlement</h3>
      <p>
      Pursuant to the IOSCO DVP Model 1 methodology adopted, both securities and funds (i.e. cash) 
      are settled between relevant accounts on a real time gross basis (trade for trade processing) at the time the transaction is matched on the MERJ Exchange ATS. 
      This eliminates settlement risk and ensures strict delivery versus payment for all transactions in equities listed on MERJ Exchange at the time of the transaction.
      </p>
    </section>
  );
};

Settlement.propTypes = {};
Settlement.defaultProps = {};

export default Settlement;
