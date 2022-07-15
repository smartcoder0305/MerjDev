/*
  Fields

  [
    {
      name: string.isRequired,
      type: string,
      label: string.isRequired,
      options: [string], // only applicable to type === select
    }
  ]
*/

const selectOptions = {
  enquiries: [
    { label: 'General', value: 'General' },
    { label: 'Members/Advisors', value: 'Members/Advisors' },
    { label: 'Listing', value: 'Listing' },
    { label: 'Technology', value: 'Technology' },
    { label: 'Compliance & Surveillance', value: 'Compliance' },
    { label: 'Customer support', value: 'Customer support' },
    { label: 'Connectivity/IT issues', value: 'IT' },
  ],
};

const fields = (formType) => [
  {
    title: '',
    submitButton: {
      name: 'submit',
      type: 'submit',
      value: 'submit'
    },
    fields:[
      {
        name: 'enquiryType',
        type: 'select',
        label: 'What is the nature of your enquiry?',
        options: selectOptions[formType],
      },
      {
        name: 'fullName',
        type: 'text',
        label: 'Full name',
        isRequired: true,
      },
      {
        name: 'emailAddress',
        type: 'email',
        label: 'Email address',
        isRequired: true,
      },
      {
        name: 'companyName',
        type: 'text',
        label: 'Company name',
        isRequired: true,
      },
      {
        name: 'message',
        type: 'textarea',
        label: 'Message',
        isRequired: true,
      },
    ]
  }
];

export default fields;
