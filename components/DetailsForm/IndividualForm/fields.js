
  var namePattern = "[^ ][a-zA-Z ]{1,20}";
  var idPattern = "[0-9a-zA-Z]{1,50}";
  var mobilePattern = "[0-9]{7,15}";
  var passportPattern = "*";
  var postalPattern = "[^ ][a-zA-Z 0-9]{3,8}";

function padNumbers(number) {
    var num = Number(number);
    if(num < 10) {
        return String("0" + num);
    } else {
        return String(num);
    }
}

    var date = new Date();
    var dd = padNumbers(date.getDate());
    var mm = padNumbers(date.getMonth() + 1);
    var yy = date.getFullYear();

    var today = `${yy}-${mm}-${dd}`;
const fields =(formType)=>[
    
    {
        title: "PERSONAL DETAILS",
        IDType: "individual", 
        fields:[
            {
                label: 'Title ',
                name:'Title',
                validationMessage: 'Please select a value',
                type: 'select',
                isRequired: true,
                hasIDType: false,
                options:[
                    {label: 'Please select', value: ''},
                    {label:'Mr', value:'MR'},
                    {label:'Mrs', value:'MRS'},
                    {label:'Miss', value:'MISS'},
                    {label: 'Dr', value: 'DR'},
                    {label: 'Prof', value: 'PROF'}
                ]
            },
            {
                label: 'First Name(s) ',
                name: 'FirstName',
                pattern: namePattern,
                validationMessage: 'Please enter a valid first name',
                type: 'text',
                isRequired: true
            },
            {
                label: 'Last Name(s) ',
                name: 'LastName',
                pattern: namePattern,
                validationMessage: 'Please enter a valid last name',
                type: 'text',
                isRequired: true
            },
            {
                label:'Date Of Birth ',
                name: 'DateOfBirth',
                max: today,                
                min: '1900-12-31',
                validationMessage: 'Your Date Of Birth may not be in the future',
                type: 'date',
                isRequired: true
            },
            {
                label: 'Gender ',
                hasIDType: false,
                name: "Gender",
                validationMessage: 'Please select a gender',
                type: 'select',
                options: [
                    {label: 'Please Select', value: ''},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'}
                ],
                isRequired: true
            },
            {
                name: 'IDType',
                type: 'select',
                hasIDType: true,
                label: 'ID Type ',
                isRequired: true,
                validationMessage: 'Please select a ID Type',
                options:[
                    {label: 'Please Select', value: ''},
                    {label: 'Photo based Identification', value: 'PhotobasedIdentification'},
                    {label: 'Passport', value: 'Passport'}
                ]
            },
            {
                label: 'ID Number ',
                name: "IDNumber",
                type: 'numbers',
                pattern: idPattern,
                validationMessage: 'Please enter a valid ID Number',
                isRequired: true,
                IDType: 'PhotobasedIdentification'
            },
            {
                label: 'Passport Number ',
                name: 'PassportNumber',
                type: 'text',
                pattern: passportPattern,
                validationMessage: 'Please enter a valid Passport Number',
                isRequired: true,
                IDType: 'Passport'
            },
            {
                label: 'Passport Expiry Date ',
                name: 'PassportExpiryDate',
                isRequired: true,
                max: '9999-12-31',
                min: today,
                validationMessage: 'Your Passport Expiry Date may not be in the past',
                type: 'date',
                IDType: 'Passport'
            },
            {
                label: 'Country of Issue ',
                name: 'CountryOfIssue',
                type: 'countrySelect',
                IDType: 'Passport',
            },
            {
                label: 'Are you a United States (US) Person or Entity? ',
                name: 'IsUsaBased',
                hasIDType: false,
                validationMessage: 'Please select a value',
                type: 'select',
                options:[
                    {label: 'Please select', value: ''},
                    {label: 'Yes', value: "true"},
                    {label: 'No', value: "false"}
                ],
                isRequired: true
            }
        ]
    },
    {
        title: 'PERSONAL CONTACT DETAILS',
        IDType: "individual",
        submitButton: {
            name: 'submit',
            type: 'submit',
            value: 'continue'
        },
        fields:[
            {
                name:'Email',
                type: 'email',
                validationMessage: 'Please enter a valid email address',
                label: 'Email ',
                isRequired: true,
                isDisabled: true
            },
            {
                name:'CountryCode',
                type: 'mobileCountrySelect',
                label: 'Country Code ',
                validationMessage: 'Please select a value',
                isRequired: true
            },
            {
                name: 'MobileNumber',
                label: 'Mobile Number ',
                pattern: mobilePattern,
                validationMessage: 'Please enter a valid Mobile Number',
                type: 'text',
                isRequired: true
            },
            {
                name: 'AddressLine1',
                type: 'text',
                validationMessage: 'Please enter a value',
                label: 'Address Line1 ',
                isRequired: true,
            },
            {
                name: 'AddressLine2',
                type: 'text',
                label: 'Address Line2 ',
                isRequired: false,
            },
            {
                name: 'AddressLine3',
                type: 'text',
                label: 'Address Line3 ',
                isRequired: false,
            },
            {
                name: 'Suburb',
                type: 'text',
                label: 'Suburb',
                isRequired: false,
            },
            {
                name: 'RegionProvince',
                type: 'text',
                label: 'Region / Province ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: 'City',
                type: 'text',
                label: 'City ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: 'Country',
                type: 'countrySelect',
                label: 'Country ',
                validationMessage: 'Please select a value',
                isRequired: true,

            },
            {
                name: "PostalCode",
                label: "Postal Code ",
                type: "text",
                pattern: postalPattern,
                validationMessage: 'Please enter a value',
                isRequired: true
            },
        ]
    }
];

export default fields;