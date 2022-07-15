import * as React from 'react';
import styles from './styles.scss';
export default class Spinner extends React.Component{
  
  
    render() {
  
    return (
      <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
    )

  }
}