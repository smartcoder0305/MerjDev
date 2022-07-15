import React from 'react'
import helpers from '../../../static/styles/helpers.scss';
import styles from './styles.scss';
import Router from 'next/router';
import Button from '../../../components/Button';


const WhyMerjRegisterSection = ()=>{
    
    return(
        <section className={styles.centerItems}>
            <div className={`${helpers.paddedInner} ${styles.enquiryBtn} animate`}>
                <hr />
                <div className={styles.textItem}>
                    Register your interest today through the online enquiry form
                </div>
                <Button text='Make an enquiry' href='/enquiries/general/enquiries'/>
            </div>
        </section>
    )
};


WhyMerjRegisterSection.propTypes = {};
WhyMerjRegisterSection.defaultProps = {};

export default WhyMerjRegisterSection;