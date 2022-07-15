const fields = ()=>[
    {
        title:'',
        applicationStyle: 'applicationStyle',
        fields:[
            {
                name: 'Individual',
                applicantType: "ApplicantType",
                label: "Individual",
                type: 'radio',
                value: 'Individual', 
                description: 'You are investing as yourself.',
            },
            {
                name: 'Company',
                applicantType: "ApplicantType",
                label: "Entity",
                type: 'radio',
                value: 'Company', 
                description: 'You are investing on behalf of an Entity or a Company.',
            }
        ]
    }
];

export default fields;

