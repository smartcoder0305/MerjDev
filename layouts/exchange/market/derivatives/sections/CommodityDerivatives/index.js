import React from 'react';

const CommodityDerivatives = () => {
  return (
    <section>
      <h2>Commodity Derivatives</h2>
      <p>
        The MERJ Exchange Commodity Derivatives Board currently offers live order book trading of
        listed derivatives on spot gold. Another 33 further listed derivatives are available on
        underlying international commodities and commodities futures through MERJ Exchange
        derivatives market Members.
      </p>
      <p>Features:</p>
      <ul>
        <li>Tight spreads;</li>
        <li>Breadth of products – wide range of available listed equity indices derivatives;</li>
        <li>
          Deep institutional liquidity – asset managers, retail investors and institutional
          investors benefit from a deep, liquid order book beyond the top of book spread to
          accommodate trades of any size;
        </li>
        <li>
          Firm limit order liquidity - the MERJ Exchange order book is driven by streaming no ‘last
          look’ limit orders supplied by liquidity providers;
        </li>
        <li>
          Competitive fees – exchange and clearing fees from .15 basis points (0.000015) on total
          value traded; and
        </li>
        <li>
          USD settled – mitigating additional cross currency costs for those in exchange control
          countries
        </li>
      </ul>
    </section>
  );
};

CommodityDerivatives.propTypes = {};
CommodityDerivatives.defaultProps = {};

export default CommodityDerivatives;
