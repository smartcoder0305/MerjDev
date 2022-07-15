import React from 'react';

import Introduction from './Introduction';
import MembershipRequirements from './MembershipRequirements';
import ListOfMembers from './ListOfMembers';
import RelatedPages from './RelatedPages';

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
    // documents: [
    //   {
    //     title: 'MERJ Platform Participation Agreement',
    //     href: '/static/documents/MERJ Platform Participation Agreement.pdf',
    //   },
    // ],
  },
  {
    title: 'Membership Requirements',
    id: 'MembershipRequirements',
    content: <MembershipRequirements />,
    documents: [
      {
        title: 'Schedule of Fees and Charges for Service Providers', href: 'https://merj-files.s3-eu-west-1.amazonaws.com/Schedule+of+Fees+and+Charges+for+Service+Providers.pdf'
      },
    ],
  },
  // {
  //   title: 'MERJ EXCHANGE',
  //   id: 'MERJExchange',
  //   content: <MERJExchange />,
  //   documents: [],
  // },
  {
    title: 'List of Members',
    id: 'ListOfMembers',
    content: <ListOfMembers />,
    documents: [],
  },
  {
    title: 'Related Pages',
    id: 'RelatedPages',
    content: <RelatedPages />,
    documents: [],
  },
];

export default sections;
