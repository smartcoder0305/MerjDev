import React from 'react';
import * as APIHelper from '../../../utils/APIHelper'; 
import TermsAndConditionForm from '../../../components/TermsAndConditionForm';
import styles from '../styles.scss';

class LegalSection extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            applicationType: 'Individual'
        }
    }

    componentDidMount(){
        APIHelper.GetClientDetails().then((res)=>{
            if(res){
                if(res.Success){
                    let data = res.Data;
                    if(data.IsIndividual){
                        this.setState({
                            applicationType: 'Individual'
                        })
                    }
                    else if(data.IsGroup){
                        this.setState({
                            applicationType: 'Company'
                        })
                    }
                }else{
                    throw Error(res.Error);
                }
            }
        })
    }

    render(){
        const { isReadOnly } = this.props;
        const { applicationType } = this.state;
        return(
            <section className={styles.mobileScreen +" "+ isReadOnly? styles.readOnlyStyle: null }>
                 <h1>LEGAL UNDERTAKINGS</h1>
                <TermsAndConditionForm formType={applicationType} isReadOnly={isReadOnly}/>
            </section>
        );
    }
};

LegalSection.protoTypes = {};
LegalSection.defaultProps = {};

export default LegalSection;
