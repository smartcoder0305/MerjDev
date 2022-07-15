import React from 'react';

import Introduction from './Introduction';
import ListOfSponsorAdvisors from './ListOfSponsorAdvisors';
import SponsorAdvisorRequirements from './SponsorAdvisorRequirements';

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
    title: 'List of Sponsor Advisors',
    id: 'ListOfSponsorAdvisors',
    content: <ListOfSponsorAdvisors />,
    documents: [],
  },
  {
    title: 'Sponsor Advisor Requirements',
    id: 'SponsorAdvisorRequirements',
    content: <SponsorAdvisorRequirements />,
    documents: [
      {
        title: 'MERJ Exchange Sponsor Advisor Rules',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Exchange+Sponsor+Advisor+Rules.pdf',
      },
      {
        title: "MERJ Exchange Sponsor Advisor Application form",
        href:'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Sponsor+Advisor+Application+Form.pdf' 
      },
      {
        title: 'Schedule of Fees and Charges for Service Providers', href: 'https://merj-files.s3-eu-west-1.amazonaws.com/Schedule+of+Fees+and+Charges+for+Service+Providers.pdf'
      },
    ],
  },
];

export default sections;
