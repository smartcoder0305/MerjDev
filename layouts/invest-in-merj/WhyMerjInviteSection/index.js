import React from 'react';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';
const WhyMerjInviteSection= ()=>{
    return(
        <section>
            <div className={`${helpers.paddedInner} animate`}>
                <div className={styles.inviteContainer}>
                    We invite you to join us in building an exchange <br />
                    for the 21st century.    
                </div>
            </div>
        </section>
    );
};


WhyMerjInviteSection.propTypes = {};
WhyMerjInviteSection.defaultProps = {};

export default WhyMerjInviteSection;