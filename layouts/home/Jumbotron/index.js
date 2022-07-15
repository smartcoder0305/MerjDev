    import React from 'react';

    import styles from './styles.scss';
    import helpers from '../../../static/styles/helpers.scss';

    import Button from '../../../components/Button';
    import AssociationsSection from '../../../components/AssociationsSection';
import { app } from '../../../config';

    class Jumbotron extends React.Component {

      render () {
        const app = JSON.parse(sessionStorage.getItem("configa"));
        const signupUrl = app.VenusUrl + "/" + "signup/Merj";
        return (
          <section className={styles.jumboTron}>
      <div className={styles.innerPadding}>
        <div className={styles.jumboHeader}>
          <div className={`${styles.jumboHeaderLeft} animate`}>
            <h1>
              <small>Global Securities &amp; Digital Asset Exchange</small>
              Global Market Freedom
            </h1>

            <div className={styles.textContainer}>
              <p className={styles.text}>
              MERJ Exchange is an award winning global securities exchange for traditional and digital securities. Open an account online or contact us today to learn how you can participate.

              </p>
            </div>

            <div className={styles.smallTextContainer} >
              <div>
                <strong>

                Choose from the following options to open a trading account.
                </strong>
              </div>
              <br/>
              <div className={styles.text}>
              Option 1: Direct Trader Participant - Open an account and trade directly on the exchange.
              </div>
              <div className={styles.text}>
              Option 2: Brokerage Account - Open an account with one of our broker-dealer Members.
              </div>
            </div>

          </div>
        </div>

        <div className={styles.jumboFooter}>
          <AssociationsSection />
        </div>
        
      </div>

      <div className={styles.splitBlockContainer}>
        <div className={styles.splitBlock}>
          <div><strong>GET STARTED NOW</strong></div>
          <div className={styles.centerText}>Create an account as a Direct Trader Participant with MERJ Exchange</div>
          <div className={styles.buttonsContainer}>
            {
              this.props.hasDeadLinePassed ?
              <Button text="CREATE ACCOUNT" handleClick={() => window.location.href = signupUrl} link={{ href: signupUrl }}/>
              : null
            }
            </div>
        </div>

        <div className={styles.splitBlock}>
          <div><strong>NEED SOME HELP?</strong></div>
          <div className={styles.centerText}>Create an account with a broker-dealer member of MERJ Exchange and benefit from having a broker-client relationship</div>
          <div className={styles.buttonsContainer}>
               <Button text="FIND A MEMBER" link={{ href: '/exchange/service-providers/members' }} /> 
            </div>
        </div>
           
      </div>
    </section>
  );
}
};

Jumbotron.propTypes = {
  hasDeadLinePassed: Boolean
};
Jumbotron.defaultProps = {
  hasDeadLinePassed: false
};

export default Jumbotron;