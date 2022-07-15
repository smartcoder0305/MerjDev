import React from 'react';

import EntityTandC from './GroupTandC';
import IndividualTandC from './IndividualTandC';

export default class TermsAndConditionsForm extends React.Component{
    
    constructor(props){
        super(props);
    }

    renderTerms(formType){
        const { isReadOnly } = this.props;
        switch(formType){

            case 'Company':
                return (<EntityTandC formType={formType} isReadOnly={isReadOnly}/>);
                break;
            case 'Individual':
                return (<IndividualTandC formType= {formType} isReadOnly={isReadOnly}/>);
                break;
            default:
                return (null);

        }
    }

    render(){
        const { formType } = this.props;

        return(
            <div>
                {
                    this.renderTerms(formType)
                }
            </div>
        )
    }
}