
import moment from 'moment';
import countdown from './countdown.min.js';

import styles from './index.scss';
import * as APIHelper from '../APIHelper';

function hasDeadLinePassed(date) {
    const deadline = date;
    
    var deadlinePassed = countdown(deadline).value > 0;
    return deadlinePassed;
}

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "",
        }
    }

    hasDeadLinePassed = () => {
        var deadlinePassed = countdown(this.state.deadline).value > 0;
        return deadlinePassed;
    }

    GetCountDownDate = (initialFetch) => {
        APIHelper.getDate().then((resolve) => {
            return resolve.json()
          }).then((response) => {
            var endDate = moment(response[0]['UTC-Date']);
            this.setState({ deadline: endDate });
            if (initialFetch) {
                this.updateCountDown();
            }
          })

    }

    componentDidMount() {

        this.GetCountDownDate(true);

    }

    updateCountDown = () => {
        setInterval(() => {
            this.GetCountDownDate(false);
        }, 60000)
        // }, 100)


    }


    render() {
        const { deadline } = this.state;


        const deadLinePassed = this.hasDeadLinePassed(deadline)

        var nowUTC = moment.utc();
        // console.log(moment(moment().toISOString()), 'moment');
        // console.log(nowUTC, 'nowUTC');
        // console.log(deadline, 'deadline')


        
        const countdownSet = countdown(nowUTC, deadline, countdown.DAYS | countdown.HOURS | countdown.MINUTES);
        
        
        var DD = (countdownSet.days).toString();
        var HH = (countdownSet.hours).toString();
        var MM = (countdownSet.minutes).toString();



        return (
            !deadLinePassed ?
                <div className={styles.countDownContainer}>
                    {
                        this.props.CountDownTitle ?
                            <div className={styles.countdownTitle}>{this.props.CountDownTitle}</div> : null
                    }

                    <div className={styles.countDownDigitContainer}>
                        {
                            DD.split('').length > 1 ? <React.Fragment> <div className={styles.countDownDigit}> {DD.split('')[0]} </div> <div className={styles.countDownDigit}> {DD.split('')[1]} </div> </React.Fragment> : <React.Fragment> <div className={styles.countDownDigit}> 0 </div> <div className={styles.countDownDigit}> {DD.split('')[0]} </div> </React.Fragment>
                        }
                        <div> Days </div>
                    </div>

                    <div className={styles.countDownDigitContainer}>
                        {
                            HH.split('').length > 1 ? <React.Fragment> <div className={styles.countDownDigit}> {HH.split('')[0]} </div> <div className={styles.countDownDigit}> {HH.split('')[1]} </div> </React.Fragment> : <React.Fragment> <div className={styles.countDownDigit}> 0 </div> <div className={styles.countDownDigit}> {HH.split('')[0]} </div> </React.Fragment>
                        }
                        <div> Hours </div>
                    </div>

                    <div className={`${styles.countDownDigitContainer} ${styles.countDownDigitContainerMinutes}`}>
                        {
                            MM.split('').length > 1 ? <React.Fragment> <div className={styles.countDownDigit}> {MM.split('')[0]} </div> <div className={styles.countDownDigit}> {MM.split('')[1]} </div> </React.Fragment> : <React.Fragment> <div className={styles.countDownDigit}> 0 </div> <div className={styles.countDownDigit}> {MM.split('')[0]} </div> </React.Fragment>
                        }
                        <div> Minutes </div>
                    </div>



                </div> : null
        )
    }

}


// function renderCountdown(CountDownTitle) {
//     return (
//         <Countdown CountDownTitle={CountDownTitle} />
//     );
// }




export { Countdown , hasDeadLinePassed};
