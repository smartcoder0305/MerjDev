import * as React from 'react';
import styles from './styles.scss';


export class Wizard extends React.Component {

  renderItem(stepNumber) {
    return (
      <div className={`${styles.progressBarWrapper}`}>
        <div className={`${stepNumber === this.props.activeStep ? styles.progressBarArcActive : styles.progressBarArc} ${stepNumber === this.props.activeStep ? styles.progressBarFullArcActive : styles.progressBarFullArc}`}></div>
        <div className={`${stepNumber === this.props.activeStep ? styles.progressBarNumberActive : styles.progressBarNumber}`}>
          {stepNumber}
        </div>
      </div>
    )
  }


  renderVerify() {
    return (
      <div className={`${styles.progressBarWrapper}`}>
        <div className={`${styles.progressBarClock} ${styles.progressBarArcActive} ${styles.progressBarFullArcActive}`}>
          <div className={`${styles.clock}`}>

            <svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" width="17.437" height="23.257" viewBox="0 0 17.437 23.257">
              <g id="Group_51" data-name="Group 51" transform="translate(700.608 837.096)">
                <path id="Path_224" data-name="Path 224" d="M-688.762-830.694v-1.149h1.286V-837.1H-696.3v5.254h1.286v1.149a8.731,8.731,0,0,0-5.592,8.137,8.728,8.728,0,0,0,8.719,8.719,8.729,8.729,0,0,0,8.719-8.719A8.732,8.732,0,0,0-688.762-830.694Zm-.853-4.264v.833h-4.548v-.833Zm-3.262,3.115h1.977v.624a8.714,8.714,0,0,0-.989-.058,8.7,8.7,0,0,0-.988.058Zm.988,15.866a6.588,6.588,0,0,1-6.58-6.58,6.588,6.588,0,0,1,6.58-6.58,6.588,6.588,0,0,1,6.581,6.58A6.588,6.588,0,0,1-691.889-815.977Z" transform="translate(0 0)" />
                <path id="Path_225" data-name="Path 225" d="M-678.1-810.659h-2.138v6.542h4.868v-2.138h-2.73Z" transform="translate(-13.107 -17.015)" />
              </g>
            </svg>


          </div>
        </div>
      </div>
    )
  }

  renderCompletedItem() {
    return (
      <div className={`${styles.progressBarWrapper}`}>
        <div className={`${styles.progressBarComplete}`}>
          <div className={`${styles.check}`}> </div>
        </div>
      </div>
    )
  }

  handleTextColor = (stepNumber) => {
    const {activeStep} = this.props;
    var check = activeStep == stepNumber;
    var stylesheet = {
      color: check ? "white" : "#b4b6c6",
      fontWeight: check ? "bold" : "normal"
    }

    return stylesheet;
  }

  render() {
    const { activeStep } = this.props;
    let subText = this.props.subText;

    return (
      <div className={`${styles.wizardBackground}`}>

        <div className={`${styles.wizardContainer}`}>
          <div className={`${styles.wizardTitle}`}>
            {this.props.title.toUpperCase()}
          </div>
          <div className={`${styles.wizardMarginTop}`}>
            We require some further information in order to complete your application.
           </div>
          {
            activeStep >= 5 ? <br /> : null
          }
          <div className={`${styles.wizardItemContainer}`}>
            {
              activeStep > 1 ? this.renderCompletedItem() : this.renderItem("1")
            }
            <span style={this.handleTextColor("1")}>
              Your Account Details
            </span>
            {
              activeStep > 2 ? this.renderCompletedItem() : this.renderItem("2")
            }
            <span style={this.handleTextColor("2")}>

              Provide Your Details
               </span>
            {
              activeStep > 3 ? this.renderCompletedItem() : this.renderItem("3")
            }
            <span style={this.handleTextColor("3")}>

              Agree To Terms
               </span>
            {
              activeStep > 4 ? this.renderCompletedItem() : this.renderItem("4")
            }
            <span style={this.handleTextColor("4")}>

              Upload your docs
               </span>
            {
              activeStep >= 5 ? this.renderVerify() : this.renderItem("5")
            }
            <span style={this.handleTextColor("5")}>

              KYC/AML verification
               </span>

          </div>



          <div className={`${activeStep >= 5 ? styles.verifySubtext : styles.subtext}`}> {subText} </div>

        </div>

        <div className={`${styles.wizardContainerMobile}`}>
          <div className={`${styles.wizardTitleMobile}`}>
            {this.props.title.toUpperCase()}
          </div>
          <div>
            <div className={`${styles.wizardMarginTop}`}>
              We require some further information in order to complete your application.
           </div>

            <div className={`${styles.wizardItemContainerMobile}`}>
              {
                activeStep > 1 ? this.renderCompletedItem() : this.renderItem("1")
              }
              <span>

                Your Account Details
               </span>
              {
                activeStep > 2 ? this.renderCompletedItem() : this.renderItem("2")
              }   <span>

                Provide Your Details
            </span>
              {
                activeStep > 3 ? this.renderCompletedItem() : this.renderItem("3")
              }
              <span>

                Agree To Terms
               </span>
              {
                activeStep > 4 ? this.renderCompletedItem() : this.renderItem("4")
              }
              <span>

                Upload your docs
               </span>
              {
                activeStep >= 5 ? this.renderVerify() : this.renderItem("5")
              }
              <span>

                KYC/AML verification
               </span>

            </div>

            <div className={`${activeStep >= 5 ? styles.verifySubtext : styles.subtext}`}> {subText} </div>
          </div>

          <hr />

        </div>
      </div>
    )

  }
}