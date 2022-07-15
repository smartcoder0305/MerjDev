import React from 'react';
import styles from './styles.scss';

export default class ErrorModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {}

        this.close = this.close.bind(this);
    }

    close() {
        this.props.isErrorModalOpen();
    }
    render(){


        return(
            <div className={styles.backdrop}>
                <div >
                    <div className={styles.modalWrapper} >
                        <div className={styles.modalHeader}>
                            <span className={styles.closeModalBtn} onClick={this.close}>×</span>
                        </div>
                        <div className={styles.modalBody}>
                            <div>
                                <div className={this.props.modalImage} />
                            </div>
                            <div className={styles.modalTypeText}>{this.props.modalType}</div>
                            <div className={styles.modalContent}>
                                <div>{this.props.content}</div>
                                <div>{this.props.subContent}</div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        );
    }

}