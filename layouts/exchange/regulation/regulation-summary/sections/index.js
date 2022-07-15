import React from 'react';

import Introduction from './Introduction';

/*
  Documents

  [
    {
      title: string,
      href: string,
    }
  ]
*/

const sections = [
  {
    title: 'Overview',
    id: 'introduction',
    content: <Introduction />,
    documents: [],
  },
];

export default sections;
