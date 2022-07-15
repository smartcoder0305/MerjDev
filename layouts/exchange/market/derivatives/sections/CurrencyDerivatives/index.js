import React from 'react';

const CurrencyDerivatives = () => {
  return (
    <section>
      <h2>Currency Derivatives</h2>
      <p>
        The MERJ Exchange Currency Derivatives Board offers 7 major currency pairs with full market
        depth for currency derivative, traders and a total of 124 listed currency derivatives on
        underlying currency pairs available through MERJ Exchange derivatives market Members.
      </p>

      <p>Features:</p>

      <ul>
        <li>Tight spreads;</li>
        <li>Breadth of products – wide range of available listed currency derivatives;</li>
        <li>
          Deep institutional liquidity – asset managers, retail investors and institutional
          investors benefit from a deep, liquid order book beyond the top of book spread to
          accommodate trades of any size;
        </li>
        <li>
          Firm limit order liquidity - the MERJ Exchange order book (5 levels of depth via FIX and
          soon to be 20 levels) is driven by streaming no ‘last look’ limit orders supplied by
          liquidity providers pooling pricing from multiple top tier banks and institutions,
          ensuring transparent price discovery and true cost of trade for every matched order;
        </li>
        <li>Competitive fees – exchange and clearing fees are USD 25.00 per million traded; and</li>
        <li>
          USD settled – mitigating additional cross currency costs for those in exchange control
          countries;
        </li>
      </ul>
    </section>
  );
};

CurrencyDerivatives.propTypes = {};
CurrencyDerivatives.defaultProps = {};

export default CurrencyDerivatives;
