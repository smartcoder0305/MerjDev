import React from 'react';
import styles from './styles.scss';
import Button from '../Button';
import ButtonSpinner from '../ButtonSpinner';


export default class Modal extends React.Component{

    constructor(props){
        super(props);
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.close = this.close.bind(this);
    }


    handleSubmit(){
        this.props.onSubmit(true);
    }

    onCancel(){
        this.props.onCancel();
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
                            <div>
                                <div className={this.props.modalImage} />
                            </div>
                            <div className={styles.modalTypeText}>{this.props.modalType}</div>
                            <div className={styles.modalContent}>
                                <div>{this.props.content}</div>
                                <div>{this.props.subContent}</div>
                            </div>
                            <div className={styles.modalButton}>
                               <Button handleClick={this.onCancel} ghost dark>Cancel</Button>
                               <Button handleClick={this.handleSubmit} secondary>{ this.props.Ok ? <ButtonSpinner/> : "ok"} </Button>     
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        );
    }

}