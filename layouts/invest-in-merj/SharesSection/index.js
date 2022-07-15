import React from 'react';

import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';
import circle from './circle.scss';
class SharesSection extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    const {SharePrice, Target, Funds, TotalShares, percentageRaised} = this.props;

    return (
      <section className={styles.keyPrioritiesWrapper}>
      <div className={`${helpers.paddedInner}`}>
        <div className={`${styles.ShareBoxContainer}`}>
          <div className={`${styles.ShareBox}`}>
              <div className={`${styles.ShareBoxTitle}`}>Shares</div>
              <div className={`${styles.ShareBoxAmount}`}>{TotalShares}</div>
              <div className={`${styles.SharePrice}`}>Share Price: <span>${SharePrice}</span></div>
          </div>
          <div className={styles.ColourBarContainer}> <div className={styles.ColourBar}></div></div>
          <div className={`${styles.ShareBox}`}>
              <div className={`${styles.ShareBoxTitle}`}>Target</div>
              <div className={`${styles.ShareBoxAmount}`}>USD ${Target}</div>
          </div>
          <div className={styles.ColourBarContainer}> <div className={styles.ColourBar}></div></div>

          <div className={`${styles.ShareBox}`}>
              <div className={`${styles.ShareBoxTitle}`}>Funds</div>
              <div className={`${styles.ShareBoxAmount}`}>${Funds}</div>
              
              <div className={`${styles.percentageContainer}`}>


              <div className={`${circle.c100} ${circle.orange} ${circle[`p${percentageRaised}`]} ${circle.small}`}>

                    <span>{percentageRaised}%</span>
                    <div className={`${circle.slice}`}>
                        <div className={`${circle.bar}`}></div>
                        <div className={`${circle.fill}`}></div>
                    </div>
                </div>
              </div>
          </div>

        </div>
      <div className={styles.DealSummaryDisclaimer}>The information set out in this summary is an overview. In order to gain a comprehensive understanding of all necessary subject matter and information, the <a href="https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Prospectus_v01.pdf" target="_blank" download>Prospectus</a> should be read in its entirety.</div>
      </div>

    </section>
  );
}
};

SharesSection.propTypes = {
  SharePrice: String,
  Target: String,
  Funds: String,
  TotalShares: String,
  percentageRaised: Number
};
SharesSection.defaultProps = {};

export default SharesSection;
