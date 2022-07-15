import React from 'react';

import DerivativesMarket from './DerivativesMarket';
import CurrencyDerivatives from './CurrencyDerivatives';
import CommodityDerivatives from './CommodityDerivatives';
import IEDerivatives from './IEDerivatives';
import IEIDerivatives from './IEIDerivatives';
import DerivativesContractSpec from './DerivativesContractSpec';
import TradingFees from './TradingFees';

const sections = [
  {
    title: 'Derivatives Market',
    id: 'DerivativesMarket',
    content: <DerivativesMarket />,
    documents: [],
  },
  {
    title: 'Currency Derivatives',
    id: 'CurrencyDerivatives',
    content: <CurrencyDerivatives />,
    documents: [],
  },
  {
    title: 'Commodity Derivatives',
    id: 'CommodityDerivatives',
    content: <CommodityDerivatives />,
    documents: [],
  },
  {
    title: 'International Equities Derivatives',
    id: 'IEDerivatives',
    content: <IEDerivatives />,
    documents: [],
  },
  {
    title: 'International Equity Indices Derivative',
    id: 'IEIDerivatives',
    content: <IEIDerivatives />,
    documents: [],
  },
  {
    title: 'Derivatives Contract Specifications',
    id: 'DerivativesContractSpec',
    content: <DerivativesContractSpec />,
    documents: [],
  },
];

export default sections;
