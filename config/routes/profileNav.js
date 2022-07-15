const profileNavRoutes = [
    {
        title: `<svg xmlns="http://www.w3.org/2000/svg" width="16.718" height="21" viewBox="0 0 16.718 21">
        <g id="Person_" data-name="Person " transform="translate(1332.25 -598)">
          <path id="Rectangle_1116" data-name="Rectangle 1116" d="M8.159,0h.4a8.159,8.159,0,0,1,8.159,8.159v0a3.205,3.205,0,0,1-3.205,3.205H3.205A3.205,3.205,0,0,1,0,8.159v0A8.159,8.159,0,0,1,8.159,0Z" transform="translate(-1332.25 607.635)" fill="#b4b6c6"/>
          <circle id="Ellipse_41" data-name="Ellipse 41" cx="4.282" cy="4.282" r="4.282" transform="translate(-1328.174 598)" fill="#b4b6c6"/>
        </g>
      </svg>`,
        left: true,
        routes: [
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
                        title: 'Banking Details',
                        href: '/banking',
                        description: ''
                    },
                    {
                        title: 'Make a Deposit',
                        href: '/add-deposit',
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
                title: 'My Profile',    
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
                    }
                    // ,
                    // {
                    //     title: 'Settings',
                    //     href: '',
                    //     description: ''
                    // }
                ]
            }
        ]   
    }
]

module.exports = profileNavRoutes;