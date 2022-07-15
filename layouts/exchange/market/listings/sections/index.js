import React from 'react';

import Introduction from './Introduction';
import PlannedFor2019 from './PlannedFor2019';
import MarketData from './MarketData';

const sections = [
  {
    title: 'Overview',
    id: 'introduction',
    content: <Introduction />,
    documents: [],
    // documents: [
    //   {
    //     title: 'MERJ EXCHANGE Listing Schedules',
    //     href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Exchange+Listing+Schedules.pdf',
    //   },
    // ],
  },
  {
    title: 'Market Data',
    id: 'MarketData',
    content: <MarketData />,
    documents: [],
  },
];

export default sections;
