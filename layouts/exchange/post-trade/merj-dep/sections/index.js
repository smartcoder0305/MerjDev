import React from 'react';

import Introduction from './Introduction';
import RegistryServices from './RegistryServices';
import ReportingServices from './ReportingServices';
import Q12019 from './Q12019';
import DLTDepositoryServices from './DLTDepositoryServices';
import CorporateActions from './CorporateActions';
import RulesAndDirectives from './RulesAndDirectives';
import AboutMerjDep from './AboutMerjDep';
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
    id: 'Introduction',
    content: <Introduction />,
    documents: [
      {
        title: 'MERJ Depository Fees',
        href:
          'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Depositry+and+Registry+Limited_+Schedule+of+Fees+and+Charges.pdf',
      },
    ],
  },
  {
    title: 'Registry Services',
    id: 'RegistryServices',
    content: <RegistryServices />,
    documents: [],
  },
  {
    title: 'Reporting Services',
    id: 'ReportingServices',
    content: <ReportingServices />,
    documents: [],
  },
  {
    title: 'DLT Depository Services',
    id: 'DLTDepositoryServices',
    content: <DLTDepositoryServices />,
    documents: [],
  },
  {
    title: 'Corporate Actions',
    id: 'CorporateActions',
    content: <CorporateActions />,
    documents: [],
  },
  {
    title: 'Rules & Directives',
    id: 'RulesAndDirectives',
    content: <RulesAndDirectives />,
    documents: [
      {
        title: 'MERJ Depository Rules',
        href: 'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Depository+and+Registry+Rules.pdf',
      },
      {
        title: 'MERJ Depository Directives on Dematerialization',
        href:
          'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Depository+and+Registry+Limited_Directive+on+Dematerialization.pdf',
      },
      {
        title: 'MERJ Depository Directives on Re-materialization',
        href:
          'https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Depository+and+Registry+Limited_Directive+on+Re-Materialization.pdf',
      },
    ],
  },
  {
    title: '',
    id: 'ContactInfo',
    content: <ContactInfo />,
   documents: [],
  },
];

export default sections;
