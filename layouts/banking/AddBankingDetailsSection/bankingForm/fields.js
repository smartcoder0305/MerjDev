const fields = () => [
    {
      title: '',
      submitButton: {
        name: 'submit',
        type: 'submit',
        value: 'Save Banking Details',
        secondary: true
      },
      fields:[
        {
          name: 'BankName',
          type: 'text',
          label: 'Bank Name',
          isRequired: true,
        },
        {
          name: 'AccountHolder',
          type: 'text',
          label: 'Account Holder Name',
          isRequired: true,
        },
        {
          name: 'AccountNumber',
          type: 'text',
          label: 'Account Number',
          isRequired: true,
        },
        {
          name: 'AccountCurrency',
          type: 'currencySelect',
          label: 'Account Currency',
          isDisabled: false,
          isRequired: true,
          group: "BITPAY"
        },
        {
            name: 'BranchCode',
            type: 'text',
            label: 'Branch Code'
        },
        {
            name: 'SwiftCode',
            type: 'text',
            label: 'Swift Code',
            isRequired: true,
        },
        {
            name: 'IbanCode',
            type: 'text',
            label: 'IBAN',
            isRequired: false
        },
        {
            name: 'AddressLine1',
            type: 'text',
            validationMessage: 'Please enter a value',
            label: 'Address Line1',
            isRequired: true,
        },
        {
            name: 'AddressLine3',
            type: 'text',
            label: 'Address Line3',
            isRequired: false,
        },
        {
            name: 'AddressLine4',
            type: 'text',
            label: 'Address Line4',
            isRequired: false,
        },
        {
            name: 'AddressLine2',
            type: 'text',
            label: 'Suburb',
            isRequired: false,
        },
        {
            name: 'AddressRegion',
            type: 'text',
            label: 'Region / Province',
            validationMessage: 'Please enter a value',
            isRequired: true,
        },
        {
            name: 'AddressCity',
            type: 'text',
            label: 'City',
            //validationMessage: 'Please enter a value',
            isRequired: true,
        },
        {
            name: 'AddressCountry',
            type: 'countrySelect',
            label: 'Country',
            //validationMessage: 'Please select a value',
            isRequired: true,

        },
        {
            name: "AddressPostCode",
            label: "Postal Code",
            type: "text",
            //pattern: postalPattern,
            //validationMessage: 'Please enter a value',
            isRequired: true
        },
      ]
    },
  ];
  
  export default fields;