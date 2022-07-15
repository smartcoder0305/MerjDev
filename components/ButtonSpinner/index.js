import * as React from 'react';
import styles from './styles.scss';
export default class ButtonSpinner extends React.Component{
  
    constructor(){
      super()
    }
  
    render() {
  
      return (
        <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
      )

  }
}