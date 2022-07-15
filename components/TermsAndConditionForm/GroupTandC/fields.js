

const fields = (formType)=>[
    {
        label: 'Prospectus',
        name:'prospectus',
        value: 'prospectus',
        description: `I confirm to MERJ that I have full legal capacity and that I am duly authorised to contract and, having read and understood the <a href='https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Prospectus_v01.pdf' target='_blank'>Prospectus </a>, hereby irrevocably apply for the MERJ Token Offering. I acknowledge to MERJ that I was, at the time of making this application, in possession of a copy of the <a href='https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Prospectus_v01.pdf' target='_blank'>Prospectus</a> or I am aware of the <a href='https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Prospectus_v01.pdf target='_blank''>Prospectus</a> and its contents.  `,
        isRequired: true
    },
    {
        label: 'Third Party Permission',
        name: 'thirdPartyPermission',
        value: 'thirdPartyPermission',
        description: 'I authorize MERJ or any relevant third party to obtain confirmation or additional information from an authorised bureau and is entitled to verify my details and that I am obliged to assist in such verification promptly when requested to do so.',
        isRequired: true
    },
    {
        label: 'Truthfulness Statement',
        name: 'truthfulnesStatement',
        value: 'truthfulnesStatement',
        description: 'I acknowledge that MERJ will rely on the truthfulness and completeness of the information provided.',
        isRequired: true
    },
    {
        label: 'Confirmation Disclosure',
        name: 'confirmationDisclosure',
        value: 'confirmationDisclosure',
        description:'By agreeing to be bound by the terms and conditions of the Application Form, you confirm that the details contained in this Application Form and in your supporting documents are true and correct. You will not be able to claim later that the details that you have included in this Application Form and in your supporting documents were not true and correct when you submitted this Application Form or the supporting documents. MERJ or other persons may also have claims and rights against you because of the details that you put in this Application Form AND PROVIDING FALSE INFORMATION COULD BE A CRIMINAL OFFENCE. ',                        
        isRequired: true
    },
    {
        label: 'MERJ Terms & Conditions',
        name: 'vtTerms',
        value: 'vtTerms',
        description: `I hereby confirm that I have read, understood and accept all the aspects of <a href='https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+Platform+Participation+Agreement+v1.2.pdf' target='_blank'>MERJ Platform Participation Agreement</a> and agree and undertake that I will be bound by all of the provisions of the MERJ Terms and Conditions and that all the terms thereof will be enforceable against me by the relevant parties from such date of such acquisition.`,
        isRequired: true
    },
    {
        label: 'Privacy Policy',
        name: 'privacyPolicy',
        value: 'privacyPolicy',
        description: `I confirm that I have read, understood and accept all aspects of the <a href='https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Privacy_Policy.pdf' target='_blank'>Privacy Policy</a>.`,
        isRequired: true
    }
]

export default fields;