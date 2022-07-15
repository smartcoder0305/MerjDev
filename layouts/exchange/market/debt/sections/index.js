import React from 'react';

import Introduction from './Introduction';
import HowToList from './HowToList';

const sections = [
  {
    title: 'Overview',
    id: 'introduction',
    content: <Introduction />,
    documents: [],
  },
  {
    title: 'How to List',
    id: 'howToList',
    content: <HowToList />,
    documents: [],
  },
];

export default sections;
