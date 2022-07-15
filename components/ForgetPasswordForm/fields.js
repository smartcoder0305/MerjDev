const fields =() =>[

    {
        title: 'Reset Password',
        submitButton: {
            name: 'request-password-reset',
            type: 'submit',
            value: 'request password reset'
          },
        fields:[
            {
                name: 'email',
                type: 'email',
                label: 'Email Address',
                isRequired: true
            }  
        ]
    }
];

export default fields