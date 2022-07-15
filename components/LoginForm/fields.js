



const fields = ()=>[
    {
        title: "Login",
        submitButton: {
            name: 'login',
            type: 'submit',
            value: 'login'
          },
        fields: [
            {
                name: 'emailAddress',
                type: 'email',
                label: 'Email Address',
                isRequired: true,
            },
            {
                name: 'passWord',
                type: 'password',
                label: 'Password',
                isRequired: true,
            }
        ]
    }
    
];

export default fields