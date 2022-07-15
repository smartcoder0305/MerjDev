import React from 'react';

import helpers from '../../../../../../static/styles/helpers.scss';

const TradingFees = () => {
  return (
    <section>
      <h2></h2>
      <table className={helpers.marketDerivativesFeeTables}>
        <thead>
          <tr>
            <td colSpan="2">MERJ Exchange Derivatives</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>FX Derivatives</td>
            <td>0.0025%</td>
          </tr>
          <tr>
            <td>Equity Derivatives Trading</td>
            <td>0.0100%</td>
          </tr>
          <tr>
            <td>Equity Index Trading</td>
            <td>0.0010%</td>
          </tr>
          <tr>
            <td>Commodity Derivatives Trading Gold</td>
            <td>0.0015%</td>
          </tr>
          <tr>
            <td>Commodity Derivatives Trading Silver</td>
            <td>0.0025%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

TradingFees.propTypes = {};
TradingFees.defaultProps = {};

export default TradingFees;
