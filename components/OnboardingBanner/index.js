import React from 'react';
import styles from './styles.scss'

export default class OnboardingBanner extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className={`${styles.tabBackground}`}>
               <div className={`${styles.tabContainer}`}> 
                <div className={`${styles.subTextContainer}`}>
                        {this.props.subText}
                    </div>
                    <div className={`${styles.titleContainer}`}>
                        {this.props.title}
                    </div> 
                </div>  
            </div>
        )
    }
}
