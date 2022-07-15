const selectOption = {
    Company:
        [
            { label: "Please Select", value: "" },
            { label: "Partnership", value: "Partnership" },
            { label: "Private Limited Company ", value: "PrivateCompany" },
            { label: "Public Company", value: "PublicCompany" },
            { label: "Trust", value: "Trust" },
            { label: "Other", value: "Other" }
        ],
};

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


var namePattern = "[^ ][a-zA-Z ]{1,20}";
var idPattern = "[0-9a-zA-Z]{1,50}";
var mobilePattern = "[0-9]{7,15}";
var passportPattern = "*";
var postalPattern = "[^ ][a-zA-Z 0-9]{3,8}";


const fields = (formType) => [
    {
        title: 'ENTITY INFORMATION',
        IDType: 'company',
        fields: [
            {
                hasIDType: false,
                name: 'GroupType',
                type: 'select',
                label: 'Group Type ',
                options: selectOption[formType],
                isRequired: true,
                validationMessage: 'Please select a value',
            },
            {
                name: 'GroupName',
                type: 'text',
                label: 'Group Name ',
                validationMessage: 'Please enter a valid Group Name',
                isRequired: true,
            },
            {
                name: 'DateOfIncorporation',
                type: 'date',
                label: "Date Of Incorporation ",
                max: '9999-12-31',
                max: today,                
                min: '1900-12-31',
                validationMessage: 'Date Of Incorporation may not be in the future',
                isRequired: true,
            },
            {
                name: 'RegistrationNumber',
                type: 'text',
                label: 'Registration Number ',
                isRequired: true,
                validationMessage: 'Please enter Registration Number',


            },
            {
                name: 'OfficeTelephone',
                type: 'text',
                label: 'Office Telephone Number ',
                pattern: mobilePattern,
                validationMessage: 'Please enter a valid Mobile Number',
                isRequired: true
            },
            {
                name: 'GroupAddressLine1',
                type: 'text',
                label: 'Address Line1 ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: 'GroupAddressLine2',
                type: 'text',
                label: 'Address Line2 ',
                isRequired: false,
            },
            {
                name: 'GroupAddressLine3',
                type: 'text',
                label: 'Address Line3 ',
                isRequired: false,
            },
            {
                name: 'GroupSuburb',
                type: 'text',
                label: 'Suburb ',
                isRequired: false,
            },
            {
                name: 'GroupRegionProvince',
                type: 'text',
                label: 'Region / Province ',
                isRequired: true,
            },
            {
                name: 'GroupCity',
                type: 'text',
                label: 'City ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: 'GroupCountry',
                label: 'Country',
                validationMessage: 'Please select a value',
                type: 'countrySelect',
                isRequired: true,
            },
            {
                name: "GroupPostalCode",
                label: "Postal Code ",
                type: "text",
                pattern: postalPattern,
                validationMessage: 'Please enter a value',
                isRequired: true
            }
        ]
    },
    {
        title: 'REPRESENTATIVE PERSONAL DETAILS',
        fields: [
            {
                label: 'Title ',
                name:'GuardianTitle',
                type: 'select',
                hasIDType: false,
                validationMessage: 'Please select a value',
                isRequired: true,
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
                name: 'GuardianFirstName',
                label: 'First Name(s) ',
                isRequired: true,
                  validationMessage: 'Please enter a value',
                  pattern: namePattern,
                text: 'text'
            },
            {
                name: 'GuardianLastName',
                isRequired: true,
                validationMessage: 'Please enter a value',
                pattern: namePattern,
                label: 'Last Name(s) ',
                type: 'text'
            },
            {
                label: 'Date Of Birth ',
                name: 'GuardianDateOfBirth',
                max: today,                
                min: '1900-12-31',
                validationMessage: 'Your Date Of Birth may not be in the future',
                type: 'date',
                isRequired: true
            },
            {
                label: 'Gender ',
                name: "GuardianGender",
                hasIDType: false,
                type: 'select',
                validationMessage: 'Please select a gender',
                options: [
                    { label: 'Please Select', value: '' },
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' }
                ],
                isRequired: true
            },
            {
                label: 'ID Type ',
                hasIDType: true,
                isRequired: true,
                name: 'GuardianIDType',
                type: 'select',
                validationMessage: 'Please select a ID Type',
                options: [
                    { label: "Please Select", value: "" },
                    { label: 'Photo based Identification', value: 'PhotobasedIdentification' },
                    { label: 'Passport', value: 'Passport' }
                ],
            },
            {
                label: 'ID Number ',
                name: "GuardianIDNumber",
                type: 'numbers',
                pattern: idPattern,
                validationMessage: 'Please enter a valid ID Number',
                isRequired: true,
                GuardianIDType: 'PhotobasedIdentification'
            },
            {
                label: 'Passport Number ',
                name: 'GuardianPassportNumber',
                type: 'text',
                pattern: passportPattern,
                validationMessage: 'Please enter a valid Passport Number',
                isRequired: true,
                GuardianIDType: 'Passport'
            },
            {
                label: 'Passport Expiry Date ',
                name: 'GuardianPassportExpiryDate',
                isRequired: true,
                max: '9999-12-31',
                min: today,
                validationMessage: 'Your Passport Expiry Date may not be in the past',
                type: 'date',
                GuardianIDType: 'Passport'
            },
            {
                label: 'Country of Issue ',
                name: 'GuardianCountryOfIssue',
                type: 'countrySelect',
                GuardianIDType: 'Passport',
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
        title: 'REPRESENTATIVE CONTACT DETAILS',
        submitButton: {
            name: 'submit',
            type: 'submit',
            value: 'continue'
        },
        fields: [
            {
                name: 'GuardianEmail',
                label: 'Email ',
                type: 'email',
                validationMessage: 'Please enter a valid email address',
                isRequired: true,
                isDisabled: true
            },
            {
                name:'GuardianCountryCode',
                type: 'mobileCountrySelect',
                label: 'Country Code ',
                validationMessage: 'Please select a value',
                isRequired: true
            },
            {
                label: 'Mobile Number ',
                name: 'GuardianMobileNumber',
                type: 'text',
                pattern: mobilePattern,
                validationMessage: 'Please enter a valid Mobile Number',
                isRequired: true
            },
            {
                name: 'GuardianAddressLine1',
                type: 'text',
                label: 'Address Line1 ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: 'GuardianAddressLine2',
                type: 'text',
                label: 'Address Line2 ',
                isRequired: false,
            },
            {
                name: 'GuardianAddressLine3',
                type: 'text',
                label: 'Address Line3 ',
                isRequired: false,
            },
            {
                name: 'GuardianSuburb',
                type: 'text',
                label: 'Suburb ',
                isRequired: false,
            },
            {
                name: 'GuardianRegionProvince',
                type: 'text',
                validationMessage: 'Please enter a value',
                label: 'Region / Province ',
                isRequired: true,
            },
            {
                name: 'GuardianCity',
                type: 'text',
                label: 'City ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: 'GuardianCountry',
                type: 'countrySelect',
                label: 'Country ',
                validationMessage: 'Please enter a value',
                isRequired: true,
            },
            {
                name: "GuardianPostalCode",
                label: "Postal Code ",
                type: "text",
                validationMessage: 'Please enter a value',
                pattern: postalPattern,
                isRequired: true
            }

        ]
    },

];

export default fields