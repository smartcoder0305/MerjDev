
  const fields = (formType) => [
    {
        title: "Registration",
        submitButton: {
          name: 'register',
          type: 'submit',
          value: 'register'
        },
        fields: [
          {
            name: 'emailAddress',
            type: 'email',
            label: 'Email address',
            isRequired: true,
          },
          {
            id: 'password',  
            name: 'password',
            type: 'password',
            label: 'Password',
            hint: "Passwords must be at least 8 characters, and must contain at least one uppercase character, one lowercase character, one number and one special character (!@#$%^&*)",
            isRequired: true,
          },
          {
            id: 'retype-password',  
            name: 'confirmPassword',
            type: 'password',
            label: 'Retype Password',
            isRequired: true,
          },
        ],
    },
  ];

  export default fields;