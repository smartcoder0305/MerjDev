const fields = [
  {
    title: null,
    submitButton: {
      name: 'submit',
      type: 'submit',
      value: 'submit'
    },
    fields:[
      {
        name: 'FNAME',
        type: 'text',
        label: 'First Name',
      },
      {
        name: 'LNAME',
        type: 'text',
        label: 'Last Name',
      },
      {
        name: 'EMAIL',
        type: 'text',
        label: 'Email Address',
        isRequired: true,
      },
      {
        name: 'interestgroup_field',
        type: 'checkboxes',
        label: 'Marketing Permissions',
        subText: 'Please select all the ways you would like to hear from MERJ Limited:',
        options: [
          {
            value: 'Email',
            name: 'gdpr[23663]',
          },
          {
            value: 'Direct Mail',
            name: 'gdpr[23667]',
          },
          {
            value: 'Customized Online Advertising',
            name: 'gdpr[23671]',
          },
        ],
      },
    ]
  }
];

export default fields;
