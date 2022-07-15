import React from 'react';

import DetailsForm from '../../../components/DetailsForm';
import styles from '../styles.scss';

class DetailsSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailAddress: props.emailAddress
        }
    }
    render(){
        
        const { isReadOnly, getForm, emailAddress} = this.props;

        return(
            <section className={isReadOnly?styles.readOnlyStyle : styles.st} >
                {
                    !isReadOnly? 
                    <div>
                        <h1>MY DETAILS</h1>
                        <h3>Are you an Individual or Entity?</h3>
                    </div>: null
                }
                <DetailsForm isReadOnly={isReadOnly} getForm={getForm} emailAddress={emailAddress}/>
            </section>
        );
    }
    
};

DetailsSection.propTypes = {};
DetailsSection.defaultProps = {};

export default DetailsSection;
