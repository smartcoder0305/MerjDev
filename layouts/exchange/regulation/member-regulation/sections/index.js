import React from 'react';

import Introduction from './Introduction';

const sections = [
  {
    title: 'Overview',
    id: 'Introduction',
    content: <Introduction />,
    documents: [
      {
        title: 'MERJ Exchange Market Rules',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Exchange+Market+Rules.pdf',
      },
    ],
  },
];

export default sections;
