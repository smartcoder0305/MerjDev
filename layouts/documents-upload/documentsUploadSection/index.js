import React from 'react';
import DocumentsUpload from '../../../components/DocumentsUpload'
import styles from '../styles.scss'

const documentsUploadSection=(props)=>{
        return(
            <section className={styles.mobileScreen+" "+ props.isReadOnly=== true? styles.readOnlyStyle: null}>
                <h1>MY DOCUMENTS</h1>
               <DocumentsUpload />
            </section>
        );
};

documentsUploadSection.protoTypes = {};
documentsUploadSection.defaultProps = {};

export default documentsUploadSection;