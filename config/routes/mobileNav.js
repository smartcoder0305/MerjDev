const mobileNav  = [

    {
        title: 'My Investments',
        routes:[
            {
                title: 'Portfolio',
                href: '/portfolio',
                description: ''
            },
        ]
    },
    {
        title: 'My Funds',
        routes:[    
            {
                title: 'Make a Deposit',
                href: '/add-deposit',
                description: ''
            },
            {
                title: 'Banking Details',
                href: '/banking',
                description: ''
            },
            {
                title: 'Withdrawals',
                href: '/withdrawals',
                description: ''
            },
            {
                title: 'Token Transfers',
                href: '/transfers',
                description: ''
            }
        ]
    },
    {
        title: 'My profile',    
        routes:[
            {
                title: 'Details',
                href: '/details',
                description: ''
            },
            {
                title: 'Terms & Conditions',
                href: '/legal',
                description: ''
            },
            {
                title: 'Documents',
                href: '/documents-upload',
                description: ''
            },
            {
                title: 'Settings',
                href: '',
                description: ''
            }
        ]
    }


]

module.exports =  mobileNav;