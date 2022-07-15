import React from 'react';
import Router from 'next/router';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';
import { app } from '../../../config';




import {hasDeadLinePassed } from '../../../utils/countdownTimer/index';

export default class JumbotronCapitalRaise extends React.Component{
  constructor(props) {
    super(props);
    
    this.ref = React.createRef();
  }


  componentDidMount() {
    this.props.returnClientHeight(this.ref.clientHeight/2 + 35);
  }


  render() {

  
  return (
    <section className={styles.wrapper} ref={ref => this.ref = ref}>
      <div className={styles.container}>
        <div className={`${helpers.paddedInner} animate`}>
          <div className={styles.Intro}>
            <h1>THE MERJ CAPITAL RAISE IS NOW CLOSED.</h1>

            <p>
             For more information please contact <a  href={`mailto:${app.contact.email.support}`} > {app.contact.email.support}
            </a>; further opportunities and updates will be launching shortly.
            </p>
          </div></div></div>

    </section>
  );
    }
};