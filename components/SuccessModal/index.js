import React from 'react';
import styles from './styles.scss';
import Button from '../Button';
export default class SuccessModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {}

        this.close = this.close.bind(this);
    }

    close() {
        this.props.isModalOpen();
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
                            <div className={styles.successMessageIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 40">
                                    <path id="Success_tick" data-name="Success tick" d="M-1136.434,637.374a20,20,0,0,0-20,20,20,20,0,0,0,20,20,20,20,0,0,0,20-20A20,20,0,0,0-1136.434,637.374Zm-1.877,27.923-8.054-8.052,2.965-2.963,5.088,5.126,9.958-9.956,2.962,2.965Z" transform="translate(1156.434 -637.374)" fill="#15ac92" />
                                </svg>
                            </div>
                            <div className={styles.modalTypeText}>{this.props.modalType}</div>
                            <div className={styles.modalContent}>
                                <div>{this.props.content}</div>
                                <div>{this.props.subContent}</div>
                            </div>

                            <div className={styles.modalButton}>
                               <Button handleClick={this.close} secondary>{ this.props.Ok ? <ButtonSpinner/> : "Close"} </Button>     
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        );
    }

}