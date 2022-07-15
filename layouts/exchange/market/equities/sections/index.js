import React from 'react';

import Introduction from './Introduction';
import MainBoard from './MainBoard';
import SMEBoard from './SMEBoard';
import VentureCapital from './VentureCapital';
import HowToList from './HowToList';

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
  {
    title: 'Main Board',
    id: 'mainBoard',
    content: <MainBoard />,
    documents: [],
  },
  {
    title: 'SME Board',
    id: 'SMEBoard',
    content: <SMEBoard />,
    documents: [],
  },
  {
    title: 'Venture Capital',
    id: 'ventureCapital',
    content: <VentureCapital />,
    documents: [],
  },
  {
    title: 'How To List',
    id: 'howToList',
    content: <HowToList />,
    documents: [
      {
        title: 'Schedule of Fees and Charges for Issuers of Securities',href: 'https://merj-files.s3-eu-west-1.amazonaws.com/Schedule+of+Fees+and+Charges+for+Issuers+of+Securities.pdf'
      },
      { 
        title: 'MERJ Exchange Listing Rules', href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Listing+Rules.pdf'
      },
      {
        title: 'Directive on Regular Reporting Obligations', href: 'https://merj-files.s3-eu-west-1.amazonaws.com/Directive+on+Regular+Reporting+Obligations.pdf'
      },
    ],
  },
];

export default sections;
