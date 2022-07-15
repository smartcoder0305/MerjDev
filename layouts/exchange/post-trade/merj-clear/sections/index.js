import React from 'react';

import Introduction from './Introduction';
import Clearing from './Clearing';
import Settlement from './Settlement';
import Banking from './Banking';
import CorporateActions from './CorporateActions';
import AboutMerjClear from './AboutMerjClear';
import Governance from './Governance';
import ContactInfo from './ContactInfo';

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
    documents: [
      {
        title: 'MERJ Clear Directives',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Clearing+and+Settlement+Directives.pdf',
      },
      {
        title: 'MERJ Clear Rules',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Clearing+and+Settlement+Rules.pdf',
      },
      {
        title: 'MERJ Clear Fees',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Clearing+Fees.pdf',
      },
      {
        title: 'MERJ Clear Competency Requirements',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Clearing+Directives_Competency+Requirements.pdf',
      },
    ],
  },
  {
    title: 'Clearing',
    id: 'Clearing',
    content: <Clearing />,
    documents: [],
  },
  {
    title: 'Settlement',
    id: 'Settlement',
    content: <Settlement />,
    documents: [],
  },
  {
    title: 'Corporate Actions',
    id: 'CorporateActions',
    content: <CorporateActions />,
    documents: [],
  },
   {
    title: '',
     id: 'ContactInfo',
     content: <ContactInfo />,
     documents: [],
   },
];

export default sections;
